export const myAction = () => {
    type: "MYACTION"
};
export const addFilters = (filters) => {
    return {
        type: "ADDFILTERS",
        filters: filters
    }
};
export const myShiny = (shiny) => {
    return {
        type: "MYSHINY",
        shiny: shiny
    }
};