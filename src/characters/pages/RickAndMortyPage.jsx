import { CharactersList } from "../components/index";

export const RickAndMortyPage = () => {
    return (
        <>
            <h1>Rick and Morty</h1>
            <hr />
            
            <CharactersList publisher={'Rick and Morty'}/>
        </>
    );
}