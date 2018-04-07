const initialState = {
    ids: [1,2,3,4,5],
    byIds: {
        1: {
            id: 1,
            description: 'My tarea numero 1',
            state: 1,
            owner: 'Juorder',
            ts: Date.now()
        },
        2: {
            id: 2,
            description: 'My tarea numero 2',
            state: 1,
            owner: 'Juorder',
            ts: Date.now()
        },
        3: {
            id: 3,
            description: 'My tarea numero 3',
            state: 1,
            owner: 'Juorder',
            ts: Date.now()
        },
        4: {
            id: 4,
            description: 'My tarea numero 4',
            state: 1,
            owner: 'Juorder',
            ts: Date.now()
        },
        5: {
            id: 5,
            description: 'My tarea numero 5',
            state: 1,
            owner: 'Juorder',
            ts: Date.now()
        }
    }
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