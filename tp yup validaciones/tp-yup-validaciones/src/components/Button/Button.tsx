import React, { FC } from "react"
import Swal from "sweetalert2"
import styles from "./Button.module.css"

interface IButton {
    disabled: boolean
}

export const Button: FC<IButton> = ({ disabled }) => {

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        await Swal.fire({
            icon: "success",
            title: "Formulario válido!",
            text: "Todos los campos son correctos!",
            confirmButtonText: "Aceptar"
        })

        window.location.reload()
    }

    return (
        <div>
            <button type="submit"
                disabled={disabled}
                onClick={handleClick}
                className={styles.containerButton}
                style={{
                    backgroundColor: disabled ? "grey" : "",
                    cursor: disabled ? "not-allowed" : "pointer"
                }}>Enviar</button>

        </div>
    )
}