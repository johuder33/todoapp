const initialState = {
    ids: [],
    byIds: {}
};

export const todosReducer = (state = initialState, action) => {
    const { type, payload } = action;
    let newState;

    switch(type) {
        case "ADD_TODO": {
            newState = { state, payload };
            return newState;
        }

        case "REMOVE_TODO": {
            newState = { state, payload };
            return newState;
        }

        case "UPDATE_TODO": {
            newState = { state, payload };
            return newState;
        }

        default:
            return state;
    }
}