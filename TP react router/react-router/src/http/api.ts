import axios from "axios"
import { ICurso } from "../types/ICurso"

export const getAllCursos = async ()=>{
    const cursos = await axios.get<ICurso[]>("http://localhost:3000/cursos")
    return cursos.data
}