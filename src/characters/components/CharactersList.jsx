import { getCharactersByPublisher } from "../helpers/index"

export const CharactersList = ({ publisher }) => {

    const characters = getCharactersByPublisher(publisher);

    return (
        <>
            <ul>
                {
                    characters.map(character => (
                        <li key={character.id}>
                            {character.character}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}