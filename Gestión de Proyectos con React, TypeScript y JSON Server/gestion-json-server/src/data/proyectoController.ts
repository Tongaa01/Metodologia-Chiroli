import axios from "axios"
import { IProyecto } from "../types/IInterfaces"
import { API_URL } from "../utils/constantes"
import { putProyecto } from "../http/proyectoList"

export const traerTodosLosProyectosController = async (): Promise<IProyecto[]> => {
    try {
        const response = await axios.get<{ proyectos: IProyecto[] }>(API_URL)
        return response.data.proyectos
    } catch (error) {
        console.log(error)
        throw new Error("Error en la peticion")
    }
}

export const createProyectoController = async (nuevoProyecto: IProyecto) => {
    try {
        const proyectosBd = await traerTodosLosProyectosController()
        await putProyecto([...proyectosBd, nuevoProyecto])
    } catch (error) {
        console.log(error)
    }
}

export const updateProyectoController = async (proyectoEditado: IProyecto) => {
    try {
        const proyectoBd = await traerTodosLosProyectosController()
        const bdEditada = proyectoBd.map((proyectoBd) => 
            proyectoBd.id === proyectoEditado.id ? {...proyectoBd, ...proyectoEditado} : proyectoBd)
        await putProyecto(bdEditada)
    } catch (error) {
        console.log(error)
    }
}

export const deleteProyectoController = async (id: string) => {
    try {
        const proyectoBd = await traerTodosLosProyectosController()
        const bdEditada = proyectoBd.filter((proyectoBd) => proyectoBd.id !== id)
        await putProyecto(bdEditada)
    } catch (error) {
        console.log(error)
    }
}