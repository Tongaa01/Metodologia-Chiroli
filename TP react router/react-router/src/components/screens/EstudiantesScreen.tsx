import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { getAllCursos } from "../../http/api"
import { IEstudiante } from "../../types/IEstudiante"
import { EstudianteCard } from "../ui/EstudianteCard"

export const EstudiantesScreen = () => {

    const [estudiantes, setEstudiantes] = useState<IEstudiante[]>([])

    let { id } = useParams()

    const getCursos = async () => {
        const todosCursos = await getAllCursos()
        console.log(todosCursos)
        console.log(id)
        const resultado = todosCursos.find((curso) => `${curso.id}` === id)
        if (resultado) {
            setEstudiantes(resultado.estudiantes)

        }
        console.log(resultado)
    }

    useEffect(() => {
        getCursos()
    }, [])

    return (
        <div>

            <NavLink to="/"><button>Volver a cursos</button></NavLink>

            {estudiantes.map((estudiante, key) => (
                <div key={key}>
                    <EstudianteCard estudiante={estudiante} />
                </div>
            ))}
        </div>
    )
}
