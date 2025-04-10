import { BrowserRouter, Route, Routes } from "react-router";
import { CursosScreen } from "../components/screens/CursosScreen";
import { EstudiantesScreen } from "../components/screens/EstudiantesScreen";



export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CursosScreen />} /> 
                <Route path="/cursos/:id" element={<EstudiantesScreen />} /> 
            </Routes>
        </BrowserRouter>
    )
}

