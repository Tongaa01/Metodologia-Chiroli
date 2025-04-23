import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react"
import { useTareas } from "../../../hooks/useTareas"
import { tareaStore } from "../../../store/tareaStore"
import { ITarea } from "../../../types/ITareas"
import styles from "./Modal.module.css"

type IModal = {
    handleCloseModal: VoidFunction
}

const initialState: ITarea = {
    titulo: "",
    descripcion: "",
    fechaLimite: ""
}

export const Modal: FC<IModal> = ({ handleCloseModal }) => {
    const tareaActiva = tareaStore((state) => state.tareaActiva)

    const setTareaActiva = tareaStore((state) => state.setTareaActiva)

    const {crearTarea, putTareaEditar} = useTareas()

    const [formValues, setFormValues] = useState<ITarea>(initialState)

    useEffect(() => {
        if (tareaActiva) setFormValues(tareaActiva)
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormValues((prev) => ({ ...prev, [`${name}`]: value }))
        console.log(formValues)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (tareaActiva) {
            putTareaEditar(formValues)
        } else {
            crearTarea({...formValues, id: crypto.randomUUID()})
        }
        setTareaActiva(initialState)
        handleCloseModal()
    }

    return (
        <div className={styles.containerPrincipalModal}>
            <div className={styles.containerModal}>
                <div>
                    <h3>{tareaActiva ? "Editar tarea" : "Crear tarea"}</h3>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className={styles.formContent}>
                        <div>
                            <input onChange={handleChange} type="text" value={formValues.titulo} required autoComplete="off" name="titulo" placeholder="Título de la tarea" />
                            <textarea onChange={handleChange} name="descripcion" value={formValues.descripcion} required placeholder="Descripción de la tarea" />
                            <input onChange={handleChange} type="date" value={formValues.fechaLimite} required autoComplete="off" name="fechaLimite" />
                        </div>
                        <div className={styles.cardButton}>
                            <button onClick={handleCloseModal}>Cancelar</button>
                            <button type="submit">{tareaActiva ? "Guardar cambios" : "Crear"}</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}
