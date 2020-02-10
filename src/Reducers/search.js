const search = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SEARCH':
            return [...state.slice(0, action.value), action.value, ...state.slice(action.value)];

        case 'REMOVE_SEARCH':
            let index = state.indexOf(action.value);
            return [...state.slice(0, index), ...state.slice(index + 1)];

        default:
            return state;
    }
};

export default search;
