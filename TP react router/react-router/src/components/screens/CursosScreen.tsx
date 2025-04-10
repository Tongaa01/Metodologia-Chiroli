import { useEffect, useState } from "react"
import { getAllCursos } from "../../http/api"
import { ICurso } from "../../types/ICurso"
import { CursoCard } from "../ui/CursoCard"

export const CursosScreen = () => {

    const [cursos, setCursos] = useState<ICurso[]>([])

    const getCursos = async () => {
        const todosCursos = await getAllCursos()
        setCursos(todosCursos)
    }

    useEffect(() => {
        getCursos()
    }, [])

    return (
        <div>
            {cursos.map((curso, key) => (
                <div key={key}>
                    <CursoCard curso={curso} />
                </div>

            ))}

        </div>
    )
}
