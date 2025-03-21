import { FC } from 'react'
import { ITarea } from '../../../types/ITarea'
import styles from './CardList.module.css'

type ICardList = {
    tarea: ITarea
    handleOpenModalEdit: (tarea: ITarea)=> void
}

export const CardList: FC<ICardList> = ({ tarea, handleOpenModalEdit }) => {

    const eliminarTarea = ()=>{
        console.log('eliminar', tarea)
    }
    const editarTarea = ()=>{
        handleOpenModalEdit(tarea)
    }

    return (
        <div className={styles.containerCard}>
            <div>
                <h3>Título: <i>{tarea.titulo}</i></h3>
                <p>Descripción: <i>{tarea.descripcion}</i></p>
                <p><b>Fecha límite: <i>{tarea.fechaLimite}</i></b></p>
            </div>

            <div className={styles.containerButtons}>
                <button onClick={editarTarea}>Editar</button>
                <button onClick={eliminarTarea}>Eliminar</button>
            </div>
        </div>
    )
}
