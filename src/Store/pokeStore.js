import {pokedex} from '../pokedex';

const initialState = {
    pokemon: pokedex,
    filters: new Set()
};
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
                filters: newfilters
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
                filters: newfilter
            }
    }
};

export default pokeStore;