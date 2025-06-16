import { useMemo } from "react";
import { getCharactersByPublisher } from "../helpers/index"
import { CharacterCard } from "./index";

export const CharactersList = ({ publisher }) => {

    const characters = useMemo(() => getCharactersByPublisher(publisher), [publisher]);

    return (
        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {
                    characters.map(character => (
                        <CharacterCard character={character}/>
                    ))
                }
            </div>
        </>
    )
}