const search = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SEARCH':
            return [...state.slice(0, action.value), action.value, ...state.slice(action.value)];
        // return [...state.slice(0, 'hello'), 'hello', ...state.slice('hello')];

        case 'REMOVE_SEARCH':
            var index = state.indexOf(action.value);
            return [...state.slice(0, index), ...state.slice(index + 1)];
        default:
            return state;
    }
};

export default search;
