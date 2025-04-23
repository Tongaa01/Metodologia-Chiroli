import { useEffect, useState } from "react"
import { useTareas } from "../../../hooks/useTareas"
import { tareaStore } from "../../../store/tareaStore"
import { ITarea } from "../../../types/ITareas"
import { CardList } from "../CardList/CardList"
import { Modal } from "../Modal/Modal"
import styles from "./ListTareas.module.css"

const initialState: ITarea = {
    titulo: "",
    descripcion: "",
    fechaLimite: ""
}

export const ListTareas = () => {


    const setTareaActiva = tareaStore((state) => state.setTareaActiva)

    const {getTareas, tareas} = useTareas()

    useEffect(() => {
        getTareas()
    }, [])

    const [openModalTarea, setOpenModalTarea] = useState(false)

    const handleOpenModalEdit = (tarea: ITarea)=>{
        setTareaActiva(tarea)
        setOpenModalTarea(true)
    }

    const handleCloseModal = ()=>{
        setOpenModalTarea(false)
        setTareaActiva(initialState)
    }

    return (
        <>
            <div className={styles.containerPrincipalListTareas}>
                <div className={styles.containerTitleAndButton}>
                    <h2>Lista de tareas</h2>
                    <button onClick={() => { setOpenModalTarea(true) }}>Agregar tarea</button>
                </div>
                <div className={styles.containerListTareas}>
                    {
                        tareas.length > 0
                            ? tareas.map((el, k) => (
                                <CardList key={k} tarea={el} 
                                handleOpenModalEdit={handleOpenModalEdit}
                                />
                            ))
                            : (
                                <div>
                                    <h3>No hay tareas</h3>
                                </div>
                            )
                    }
                </div>
            </div>
            {openModalTarea && <Modal handleCloseModal={handleCloseModal} />}
        </>
    )
}
