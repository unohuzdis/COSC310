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