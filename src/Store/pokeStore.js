import {pokedex} from '../pokedex';
import {moves} from '../moves'
const initialState = {
    pokemon: pokedex,
    moves: moves,
    filters: new Set(),
    activePokemon: {"POKEMON": 'pikachu'}
};
const urlShiny = "http://www.pokestadium.com/sprites/xy/shiny/pikachu-female.gif";
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
                activePokemon: state.pokemon,
                url: state.url
            }
        case "MYSHINY":
            return {
                pokemon: state.pokemon,
                filters: state.filters,
                url: action.shiny ? `http://www.pokestadium.com/sprites/xy/shiny/${state.activePokemon.POKEMON.toLowerCase()}.gif`
              : `http://www.pkparaiso.com/imagenes/xy/sprites/animados//${state.activePokemon.POKEMON.toLowerCase()}.gif`,
                moves: state.moves,
                activePokemon: state.pokemon,

            }
        case "SELECTPOKEMON":
            return {
                pokemon: state.pokemon,
                filters: state.filters,
                url: state.shiny,
                moves: state.moves,
                activePokemon: action.pokemon
            }
        case "GETMOVES":
            return {
                pokemon: state.pokemon,
                filters: state.filters,
                url: state.shiny,
                moves: action.moves,
                activePokemon: state.activePokemon
            }
    }
};

export default pokeStore;