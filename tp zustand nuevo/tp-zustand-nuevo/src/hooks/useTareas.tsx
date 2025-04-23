import Swal from "sweetalert2"
import { useShallow } from "zustand/shallow"
import { editarTarea, eliminarTareaPorId, getAllTareas, postNuevaTarea } from "../http/tarea"
import { tareaStore } from "../store/tareaStore"
import { ITarea } from "../types/ITareas"

export const useTareas = () => {

    const { tareas, setArrayTareas, agregarNuevaTarea, eliminarUnaTarea, editarUnaTarea } = tareaStore(useShallow((state) => ({
        tareas: state.tareas,
        setArrayTareas: state.setArrayTareas,
        agregarNuevaTarea: state.agregarNuevaTarea,
        eliminarUnaTarea: state.eliminarUnaTarea,
        editarUnaTarea: state.editarUnaTarea
    })))

    const getTareas = async () => {
        const data = await getAllTareas()
        if (data) setArrayTareas(data)
    }

    const crearTarea = async (nuevaTarea: ITarea) => {
        agregarNuevaTarea(nuevaTarea)
        try {
            await postNuevaTarea(nuevaTarea)
            Swal.fire("Exito", "Tarea creada correctamente", "success")
        } catch (error) {
            console.log(error)
            eliminarUnaTarea(nuevaTarea.id!)
        }
    }


    const putTareaEditar = async (tareaEditada: ITarea) => {
        const estadoPrevio = tareas.find((el)=> el.id === tareaEditada.id)

        editarUnaTarea(tareaEditada)
        try {
            await editarTarea(tareaEditada)
            Swal.fire("Exito", "Tarea actualizada correctamente", "success")
        } catch (error) {
            console.log(error)
            if (estadoPrevio) editarUnaTarea(estadoPrevio)
        }
    }

    const eliminarTarea = async (idTarea: string) => {
        const estadoPrevio = tareas.find((el)=> el.id === idTarea)
        const confirm = await Swal.fire({
            title: "¿Estas seguro?",
            text: "No podras revertir esta acción",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, eliminar",
            cancelButtonText: "Cancelar"
        })

        if (!confirm.isConfirmed) return
        eliminarUnaTarea(idTarea)
        try {
            await eliminarTareaPorId(idTarea)
            Swal.fire("Eliminado", "Tarea eliminada correctamente", "success")
        } catch (error) {
            console.log(error)
            if (estadoPrevio) agregarNuevaTarea(estadoPrevio)
        }
       
    }

    return {
        getTareas,
        crearTarea,
        putTareaEditar,
        eliminarTarea,
        tareas,
    }
}
