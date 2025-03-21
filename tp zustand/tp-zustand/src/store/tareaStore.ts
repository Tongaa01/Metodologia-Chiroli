import { create } from "zustand";
import { ITarea } from "../types/ITarea";

interface ITareaStore {
    tareas: ITarea[];
    tareaActiva: ITarea | null;
    setTareaActiva: (tareaActiva: ITarea) => void;
    setArrayDeTareas: (arrayDeTareas: ITarea[]) => void;
    agregarTarea: (tarea: ITarea) => void;
    eliminarTarea: (idTarea: string) => void;
    editarTarea: (tareaActualizada: ITarea) => void;
}

export const tareaStore = create<ITareaStore>((set) => ({
    tareas: [],
    tareaActiva: null,
    setTareaActiva: (tareaActivaIn) => set(() => ({ tareaActiva: tareaActivaIn })),
    setArrayDeTareas: (arrayDeTareas) => set(() => ({ tareas: arrayDeTareas })),
    agregarTarea: (nuevaTarea) => set((state) => ({ tareas: [...state.tareas, nuevaTarea] })),
    editarTarea: (tareaEditada) => set((state) => {
        const arregloTareas = state.tareas.map((tarea) => tarea.id === tareaEditada.id ? {...tarea, tareaEditada} : tarea);
        return { tareas: arregloTareas };
    }),
    eliminarTarea: (idTarea) => set((state) => {
        const arregloTareas = state.tareas.filter((tarea) => tarea.id !== idTarea);
        return { tareas: arregloTareas };
    }),

}));