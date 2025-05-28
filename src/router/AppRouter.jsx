import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth/pages/index";
import { RickAndMortyPage, SolarOppositiesPage, NotFoundPage, HomePage } from "../characters/pages/index";
import { Navbar } from "../ui/components/Navbar";

export const AppRouter = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="rickandmorty" element={<RickAndMortyPage/>}/>
                <Route path="solaropposities" element={<SolarOppositiesPage/>}/>
                
                <Route path="404" element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
}