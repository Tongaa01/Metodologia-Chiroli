import { FC } from "react"
import { eliminarTareaPorId } from "../../../http/tarea"
import { ITarea } from "../../../types/ITareas"
import styles from "./CardList.module.css"

type ICardList = {
    tarea: ITarea
    handleOpenModalEdit: (tarea: ITarea)=> void
}

export const CardList: FC<ICardList> = ({ tarea, handleOpenModalEdit }) => {

    const eliminarTarea = () => {
        eliminarTareaPorId(tarea.id!)
        console.log("eliminar",tarea.id)
    }

    const editarTarea = () => {
        handleOpenModalEdit(tarea)
    }

    return (
        <div className={styles.containerCardList}>
            <div className={styles.containerCardInfo}>
                <h3>Titulo: {tarea.titulo}</h3>
                <p>Descripcion: {tarea.descripcion}</p>
                <p><b>Fecha limite: {tarea.fechaLimite}</b></p>
            </div>
            <div className={styles.containerCardButtons}>
                <button onClick={eliminarTarea}>Eliminar</button>
                <button onClick={editarTarea}>Editar</button>
            </div>
        </div>
    )
}
