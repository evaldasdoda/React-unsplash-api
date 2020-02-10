export const addSearch = item => {
    return {
        type: 'ADD_SEARCH',
        value: item
    };
};
export const removeSearch = item => {
    return {
        type: 'REMOVE_SEARCH',
        value: item
    };
};
