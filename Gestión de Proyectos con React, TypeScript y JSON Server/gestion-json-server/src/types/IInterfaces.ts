export interface IProyectoList{
    proyectos: IProyecto[]
}

export interface IProyecto {
    id: string,
    nombre: string,
    descripcion: string,
    fechaInicio: string,
    fechaFin: string,
    miembros: IMiembros[]
}

export interface IMiembros {
    id: string,
    nombre: string,
    rol: string
}