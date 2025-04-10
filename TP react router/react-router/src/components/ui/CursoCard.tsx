import { NavLink } from "react-router-dom"
import { ICurso } from "../../types/ICurso"

export const CursoCard = ({ curso }: { curso: ICurso }) => {

    return (
        <div>

            <div className="card" style={{ backgroundColor: "#242424", width: "50%", alignItems: "center", margin: "auto", marginBottom: "5px", borderColor: "#646cff" }}>
                <div className="card-body">
                    <p>Id curso: {curso.id}</p>
                    <p>Nombre curso: {curso.nombre}</p>

                    <NavLink to={`/cursos/${curso.id}`}>
                        <button>Ver estudiantes</button>
                    </NavLink>

                </div>
            </div>
        </div>
    )
}
