import { Routes, Route } from "react-router-dom";
import { Navbar } from '../../ui/components/index';
import { RickAndMortyPage, SolarOppositiesPage, NotFoundPage, HomePage, SearchPage, CharacterPage } from "../../characters/pages/index";

export const SolarAndMortyRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="rickandmorty" element={<RickAndMortyPage/>}/>
                    <Route path="solaropposities" element={<SolarOppositiesPage/>}/>
                    <Route path="search" element={<SearchPage/>}></Route>
                    <Route path="character/:id" element={<CharacterPage/>}></Route>
                    
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>

        </>
    )
}