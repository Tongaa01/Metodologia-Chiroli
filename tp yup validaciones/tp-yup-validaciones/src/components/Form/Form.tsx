import { useEffect, useState } from "react"
import { Button } from "../Button/Button"
import { Input } from "../Input/Input"
import styles from "./Form.module.css"

export const Form = () => {

    const [contraseña1, setContraseña1] = useState("")
    const [errorEnNombre, setErrorEnNombre] = useState(false)
    const [errorEnEmail, setErrorEnEmail] = useState(false)
    const [errorEnContraseña, setErrorEnContraseña] = useState(false)
    const [errorEnContraseñaRepetida, setErrorEnContraseñaRepetida] = useState(false)
    const [tieneErroresGlobales, setTieneErroresGlobales] = useState(true)

    useEffect(() => {
        if (!errorEnNombre && !errorEnEmail && !errorEnContraseña && !errorEnContraseñaRepetida) {
            setTieneErroresGlobales(false)
        } else {
            setTieneErroresGlobales(true)
        }
    })

    const returnContraseña = (valor: string) => {

        setContraseña1(valor)
    }

    return (
        <div>
            <form className={styles.containerFields}>
                <h2 style={{ display: "flex", justifyContent: "center" }}>Field Validator</h2>
                <div>
                    <Input tipo="text" nombre="nombre" placeHolder="Nombre..." texto="Ingrese su nombre:" setTieneErroresGlobales={setErrorEnNombre} />
                </div>
                <div>
                    <Input tipo="email" nombre="email" placeHolder="su.email@ejemplo.com" texto="Ingrese su correo electrónico:" setTieneErroresGlobales={setErrorEnEmail} />
                </div>
                <div>
                    <Input tipo="password" contraseñaFuncion={returnContraseña} nombre="contraseña" placeHolder="Contraseña..." texto="Ingrese una contraseña" setTieneErroresGlobales={setErrorEnContraseña} />
                </div>
                <div>
                    <Input tipo="password" contraseñaDato={contraseña1} nombre="repetirContraseña" placeHolder="Contraseña..." texto="Repita la contraseña:" setTieneErroresGlobales={setErrorEnContraseñaRepetida} />
                </div>
                <div>
                    <Button disabled={tieneErroresGlobales} />
                </div>
            </form>
        </div>
    )
}
