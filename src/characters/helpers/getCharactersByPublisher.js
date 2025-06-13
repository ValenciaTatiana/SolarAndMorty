import { characters } from "../data/characters";

export const getCharactersByPublisher = (publisher) => {

    const validPublisher = ['Rick and Morty', 'Solar Opposites'];
    if (!validPublisher.includes(publisher)) {
        throw new Error(`${publisher} i not a valid publisher`);
    }

    return characters.filter(character => character.publisher === publisher);
}
