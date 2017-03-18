import pokedex from '../pokedex';

const initialState = {
    pokemon: pokedex
};
const pokeStore = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case "MYACTION":
            return state;
    }
};

export default pokeStore;