export const myAction = () => {
    type: "MYACTION"
};
export const addFilters = (filters) => {
    return {
        type: "ADDFILTERS",
        filters: filters
    }
};

export const removeFilter = (filter) => {
    return {
        type: "REMOVEFILTERS",
        filters: filter
    }
};

export const myShiny = (shiny) => {
    return {
        type: "MYSHINY",
        shiny: shiny
    }
};
export const selectPokemon = (pokemon) => {
    return {
        type: "SELECTPOKEMON",
        pokemon: pokemon
    }
};
export const getMoves = (moves) => {
    return {
        type: "GETMOVES",
        moves: moves
    }
}