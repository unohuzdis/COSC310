import pokedex from '../pokedex';

const initialState = {
    pokemon: pokedex
};
const UserStore = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;

    }
};

export default UserStore;