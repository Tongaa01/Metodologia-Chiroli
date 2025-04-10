import { useState } from 'react'
import './App.css'
import { createProyectoController, deleteProyectoController, traerTodosLosProyectosController, updateProyectoController } from './data/proyectoController'

function App() {

    const traerTodosLosProyectos = async () => {
        try {
            const data = await traerTodosLosProyectosController()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const crearProyecto = async () => {
        try {
            const data = await createProyectoController({
                "id": "a1f5c7b3-0e3f-4978-bc55-2f6a5dfb8319aaaa",
                "nombre": "Proyecto Alpha2",
                "descripcion": "Este es un proyecto de ejemplo para el curso.",
                "fechaInicio": "2025-01-01",
                "fechaFin": "2025-06-30",
                "miembros": [
                    {
                        "id": "5b8f79d7-1db4-4cfa-a93f-7b18ad5749cc",
                        "nombre": "Juan Pérez",
                        "rol": "Desarrollador"
                    }]
            })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const actualizarProyecto = async () => {
        try {
            await updateProyectoController({
                "id": "a1f5c7b3-0e3f-4978-bc55-2f6a5dfb8319",
                "nombre": "Proyecto Alpha2",
                "descripcion": "Este es un proyecto de ejemplo para el curso.",
                "fechaInicio": "2025-01-01",
                "fechaFin": "2025-06-30",
                "miembros": [
                    {
                        "id": "5b8f79d7-1db4-4cfa-a93f-7b18ad5749cc",
                        "nombre": "Juan Pérez",
                        "rol": "Desarrollador"
                    }]
            })
        } catch (error) {
            console.log(error)
        }
    }

    const eliminarProyecto = async () => {
        try {
            deleteProyectoController("a1f5c7b3-0e3f-4978-bc55-2f6a5dfb8319")
        } catch (error) {

        }
    }

    return (
        <div>
            <div>
                <h2>Proyectos</h2>
            </div>
            <div>
                <button onClick={traerTodosLosProyectos}>
                    Traer proyectos
                </button>
                <button onClick={crearProyecto}>
                    Crear proyectos
                </button>
                <button onClick={actualizarProyecto}>
                    Actualizar proyecto
                </button>
                <button onClick={eliminarProyecto}>
                    Eliminar proyecto por id
                </button>
            </div>
        </div>
    )
}

export default App
