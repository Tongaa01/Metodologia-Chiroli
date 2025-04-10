import axios from "axios"
import { IProyecto, IProyectoList } from "../types/IInterfaces"
import { API_URL } from "../utils/constantes"

export const getProyecto = async () => {
    const response = await fetch("http://localhost:3000/proyectos")
    return response.json()
}

export const postProyecto = async (proyecto: IProyecto[]) => {
    const response = await fetch("http://localhost:3000/proyectos", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(proyecto),
    })
    return response.json()
}

export const putProyecto = async (arrayProyecto:IProyecto[]) => {

    try{
        const response = await axios.put<IProyectoList>(API_URL, {
            proyectos: arrayProyecto,
        })
        return response.data
    } catch (error) {
        console.log(error)
    }

}