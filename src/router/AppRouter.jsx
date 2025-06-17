import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages/index";
import { SolarAndMortyRoutes } from "../characters/routes/SolarAndMortyRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                {/* Ruta Publica */}
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                {/* Rutas Privadas */}
                <Route path="/*" element={
                    <PrivateRoute>
                        <SolarAndMortyRoutes />
                    </PrivateRoute>
                } />
            </Routes>
        </>
    );
}