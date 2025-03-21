import { useShallow } from "zustand/shallow"
import { tareaStore } from "../store/tareaStore"
import { editTarea, getAllTareas, postNuevaTarea } from "../http/tareas"
import { ITarea } from "../types/ITarea"
import Swal from "sweetalert2"

export const useTareas = () => {

    const {
        tareas,
        setArrayDeTareas,
        agregarTarea,
        eliminarTarea,
        editarTarea
    } = tareaStore(
        useShallow((state) => ({
            tareas: state.tareas,
            setArrayDeTareas: state.setArrayDeTareas,
            agregarTarea: state.agregarTarea,
            eliminarTarea: state.eliminarTarea,
            editarTarea: state.editarTarea
        })))

    const getTareas = async () => {
        const data = await getAllTareas()
        if (data) setArrayDeTareas(data)
    }

    const crearTarea = async (nuevaTarea: ITarea) => {
        try {
            await postNuevaTarea(nuevaTarea)
            Swal.fire("Tarea creada", "La tarea se ha creado correctamente", "success")
        } catch (error) {
            eliminarTarea(nuevaTarea.id!)
            console.log(error)
        }
    }

    const putTarea = async (tareaEditada: ITarea) => {

        const estadoPrevio = tareas.find((el) => el.id === tareaEditada.id)

        editarTarea(tareaEditada)

        try {
            await editTarea(tareaEditada)
            Swal.fire("Tarea editada", "La tarea se ha editado correctamente", "success")
        } catch (error) {
            if (estadoPrevio) editarTarea(estadoPrevio)
            console.log(error)
        }
    }

    const deleteTarea = async (idTarea: string) => {

        const estadoPrevio = tareas.find((el) => el.id === idTarea)
        const confirm = await Swal.fire({
            title: "¿Estás seguro?",
            text: "Una vez eliminada no se podrá recuperar",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
        })

        if (confirm.isDismissed) return

        eliminarTarea(idTarea)

        try {
            await deleteTarea(idTarea)
        } catch (error) {
            if (estadoPrevio) agregarTarea(estadoPrevio)
            console.log(error)
        }
    }

    return {

        tareas,
        getTareas,
        crearTarea,
        putTarea,
        deleteTarea,

    }
}
