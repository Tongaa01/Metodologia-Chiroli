import { IEstudiante } from "../../types/IEstudiante"


export const EstudianteCard = ({estudiante}:{estudiante:IEstudiante}) => {

    return (
        <div>
            <h4>Nombre: {estudiante.nombre}</h4>
            <p>Id: {estudiante.id}</p>
            <p>Edad: {estudiante.edad}</p>
        </div>
    )
}
