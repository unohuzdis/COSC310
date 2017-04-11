import {pokedex} from '../pokedex';
import {moves} from '../moves'
const initialState ={
    pokemon: pokedex,
    moves: moves,
    filters: new Set(),
    activePokemon: {
        "DEX": 25,
        "POKEMON": "Pikachu",
        "TYPE 1": "Electric",
        "TYPE 2": "",
        "ABILITIES 1": "Static",
        "ABILITIES 2": "",
        "HIDDEN ABILITY": "Lightningrod",
        "EG 1": "Field",
        "EG 2": "Fairy",
        "HEALTH POINTS": 35,
        "ATTACK": 55,
        "DEFENSE": 40,
        "SPECIAL ATTACK": 50,
        "SPECIAL DEFENSE": 50,
        "SPEED": 90,
        "TOTAL": 320,
        "HATCH STEPS": 5120
    },
    url: `http://www.pkparaiso.com/imagenes/xy/sprites/animados/pikachu.gif`
}


const pokeStore = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case "MYACTION":
            return state;
        case "ADDFILTERS":
            console.log("filters: ", action.filters);
            let newfilters = new Set();
            state.filters.forEach((filter) => {newfilters.add(filter)});
            action.filters.map((filter) => {newfilters.add(filter)});
            console.log(newfilters, state.filters);
            return {
                pokemon: state.pokemon,
                filters: newfilters,
                moves: state.moves,
                activePokemon: state.pokemon,
                url: state.url,
                nameString: state.nameString
            }
        case "REMOVEFILTERS":
            let newfilter = new Set();
            state.filters.forEach((filter) => {
                console.log(action);
                if (filter.toLowerCase() != action.filters.toLowerCase()) {
                    newfilter.add(filter)
                }
            });
            return {
                pokemon: state.pokemon,
                filters: newfilter,
                moves: state.moves,
                activePokemon: state.pokemon,
                url: state.url,
                nameString: state.nameString

            }
        case "MYSHINY":
            return {
                pokemon: state.pokemon,
                filters: state.filters,
                url: action.shiny ? `http://www.pokestadium.com/sprites/xy/shiny/${state.activePokemon.POKEMON.toLowerCase()}.gif`
              : `http://www.pkparaiso.com/imagenes/xy/sprites/animados/${state.activePokemon.POKEMON.toLowerCase()}.gif`,
                moves: state.moves,
                activePokemon: state.pokemon,
                nameString: state.nameString
            }
        case "SELECTPOKEMON":
            return {
                pokemon: state.pokemon,
                filters: state.filters,
                url: `http://www.pkparaiso.com/imagenes/xy/sprites/animados/${action.pokemon.POKEMON.toLowerCase()}.gif`,
                moves: state.moves,
                activePokemon: action.pokemon,
                nameString: state.nameString
            }
        case "GETMOVES":
            return {
                pokemon: state.pokemon,
                filters: state.filters,
                url: state.url,
                moves: action.moves,
                activePokemon: state.activePokemon,
                filters: state.filters,
                nameString: state.nameString
            }
        case "SORTBYNAME":
            return {
                pokemon: state.pokemon,
                filters: state.filters,
                url: state.url,
                moves: state.moves,
                activePokemon: state.activePokemon,
                filters: state.filters,
                nameString: action.nameString
            }
    }
};

export default pokeStore;