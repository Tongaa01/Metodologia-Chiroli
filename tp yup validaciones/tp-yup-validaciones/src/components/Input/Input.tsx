import { ChangeEvent, FC, useEffect, useState } from "react"
import { validations } from "../../schemas/formSchema"
import styles from "./Input.module.css"

type IInput = {
    tipo: string,
    nombre: string,
    placeHolder: string,
    texto: string,
    contraseñaFuncion?: Function,
    contraseñaDato?: string,
    setTieneErroresGlobales?: (estado: boolean) => void,

}

export const Input: FC<IInput> = ({ tipo, nombre, placeHolder, texto, contraseñaFuncion, contraseñaDato, setTieneErroresGlobales }) => {

    const [inputValueState, setInputValueState] = useState("")
    const [mensajeError, setMensajeError] = useState("")


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        console.log(inputValue)
        setInputValueState(inputValue)
        console.log(inputValueState)
    }

    useEffect(() => {

        if (inputValueState.trim() === "") {
            setMensajeError("")
            setTieneErroresGlobales?.(true)
            return
        }

        if (nombre === "contraseña") {
            if (contraseñaFuncion) contraseñaFuncion(inputValueState)
            console.log("Contraseña guardada en el primer paso:", contraseñaDato)
        }

        if (nombre === "repetirContraseña") {
            if (contraseñaDato) {
                console.log("Contraseña guardada en el segundo paso:", contraseñaDato)
                console.log("Contraseña repetida:", inputValueState)
                if (inputValueState !== contraseñaDato) {
                    setMensajeError("Las contraseñas no coinciden")
                    return
                } else {
                    setMensajeError("")
                }
            }

        }

        validations.validateAt(nombre, { [nombre]: inputValueState }).then(() => {
            setMensajeError("")
            setTieneErroresGlobales?.(false)
        }).catch((error) => {
            setMensajeError(error.errors[0])
            setTieneErroresGlobales?.(true)
        })

    }, [inputValueState, nombre])

    return (
        <div>
            <div className={styles.containerInput}>
                <p>{texto}</p>
                <input onChange={handleChange} type={tipo} name={nombre} placeholder={placeHolder}
                    style={mensajeError ? { borderColor: "red", color: "red" } : {}}
                />
                <p style={{ color: "red" }}>{mensajeError ? mensajeError : ""}</p>
            </div>
        </div>
    )
}
