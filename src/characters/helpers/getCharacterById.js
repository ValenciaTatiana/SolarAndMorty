import { characters } from "../data/characters";

export const getCharactersById = (id) => {

    return characters.find(character => character.id === id);
}