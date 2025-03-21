import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { tareaStore } from '../../../store/tareaStore'
import styles from './Modal.module.css'
import { ITarea } from '../../../types/ITarea'
import { useTareas } from '../../../hooks/useTareas'

type IModal = {
    handleCloseModal: VoidFunction
}

const initialState: ITarea = {
    titulo: "",
    descripcion: "",
    fechaLimite: "",
}

export const Modal: FC<IModal> = ({ handleCloseModal }) => {

    const tareaActiva = tareaStore((state) => state.tareaActiva)
    const setTareaActiva = tareaStore((state)=> state.setTareaActiva)

    const { crearTarea, putTarea } = useTareas();

    const [formValues, setFormValues] = useState<ITarea>(initialState)

    useEffect(() => {
        if (tareaActiva) {
            setFormValues(tareaActiva)
        }
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        setFormValues((prev) => ({ ...prev, [`${name}`]: value }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (tareaActiva) {
            putTarea(formValues)
        } else {
            crearTarea({ ...formValues, id: new Date().toString() })
        }
        setFormValues(initialState)
        handleCloseModal();
    }

    return (
        <div className={styles.containerPrincipalModal}>
            <div className={styles.containerPopUp}>
                <div>
                    <h3>{tareaActiva ? "Editar tarea" : "Crear tarea"}</h3>
                </div>

                <form onSubmit={handleSubmit} className={styles.formContent}>
                    <div>
                        <input onChange={handleChange} value={formValues.titulo} placeholder="Ingrese un título" type="text" required autoComplete="off" name="titulo" />
                        <textarea onChange={handleChange} value={formValues.descripcion} placeholder="Ingrese una descripción" required name="descripcion" />
                        <input onChange={handleChange} value={formValues.fechaLimite} type="date" required autoComplete="off" name="fechaLimite" />
                    </div>
                    <div className={styles.buttonCard}>
                        <button onClick={handleCloseModal}>Cancelar</button>
                        <button type="submit">{tareaActiva ? "Guardar cambios" : "Crear tarea"}</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
