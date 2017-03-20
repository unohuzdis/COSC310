import {pokedex} from '../pokedex';
import {moves} from '../moves'
const initialState = {
    pokemon: pokedex,
    moves: moves,
    filters: new Set(),
    activePokemon: {"POKEMON": 'pikachu'}
};
const pokeStore = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case "MYACTION":
            return state;
        case "ADDFILTERS":
            let newfilters = new Set();
            state.filters.forEach((filter) => {newfilters.add(filter)});
            action.filters.map((filter) => {newfilters.add(filter)});
            console.log(newfilters, state.filters);
            return {
                pokemon: state.pokemon,
                filters: newfilters,
                moves: state.moves,
                activePokemon: state.pokemon

            }
        case "SELECTPOKEMON":
            return {
                pokemon: state.pokemon,
                filters: state.filters,
                moves: state.moves,
                activePokemon: action.pokemon
            }
        case "GETMOVES":
            return {
                pokemon: state.pokemon,
                filters: state.filters,
                moves: action.moves,
                activePokemon: state.activePokemon
            }
    }
};

export default pokeStore;