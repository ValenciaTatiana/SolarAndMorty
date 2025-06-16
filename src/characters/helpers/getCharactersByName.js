import { characters } from "../data/characters";

export const getCharactersByName = (name) => {

    name = name.toLocaleLowerCase().trim();

    if(name.length === 0) return [];

    return characters.filter(character => character.character_name.toLocaleLowerCase().includes(name));
}