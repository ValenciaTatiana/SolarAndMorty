import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { RickAndMortyPage, SolarOppositiesPage, NotFoundPage } from "../characters/pages/index";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<RickAndMortyPage/>}/> */}
                <Route path="login" element={<LoginPage/>}/>
                <Route path="rickandmorty" element={<RickAndMortyPage/>}/>
                <Route path="solaropposities" element={<SolarOppositiesPage/>}/>
                
                <Route path="404" element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
}