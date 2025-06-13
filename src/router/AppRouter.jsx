import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages/index";
import { SolarAndMortyRoutes } from "../characters/routes/SolarAndMortyRoutes";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="/*" element={<SolarAndMortyRoutes/>}></Route>
            </Routes>
        </>
    );
}