import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    FILTER_TODO_BY
} from '../constants';

const initialState = {
    ids: [1,2,3,4,5],
    byIds: {
        1: {
            id: 1,
            description: 'My tarea numero 1',
            status: 'new',
            owner: 'Juorder',
            ts: Date.now()
        },
        2: {
            id: 2,
            description: 'My tarea numero 2',
            status: 'new',
            owner: 'Juorder',
            ts: Date.now()
        },
        3: {
            id: 3,
            description: 'My tarea numero 3',
            status: 'new',
            owner: 'Juorder',
            ts: Date.now()
        },
        4: {
            id: 4,
            description: 'My tarea numero 4',
            status: 'new',
            owner: 'Juorder',
            ts: Date.now()
        },
        5: {
            id: 5,
            description: 'My tarea numero 5',
            status: 'new',
            owner: 'Juorder',
            ts: Date.now()
        }
    },
    filter: 'new'
};

export const todosReducer = (state = initialState, action) => {
    const { type, payload } = action;
    let newState;

    switch(type) {
        case ADD_TODO: {
            const { id } = payload;
            const newIds = [...state.ids, id];
            const newByIds = { ...state.byIds, ...{ [id]: payload } };
            newState = { ...state, ...{ ids: newIds, byIds: newByIds } };
            return newState;
        }

        case REMOVE_TODO: {
            const { id } = payload;
            const newIds = state.ids.filter((_id) => _id !== id);
            const newByIds = { ...state.byIds };
            delete newByIds[id];
            newState = { ...state, ...{ ids: newIds, byIds: newByIds } };
            return newState;
        }

        case UPDATE_TODO: {
            const { id, status } = payload;
            const todosByIds = { ...state.byIds };
            const todo = todosByIds[id];
            if (!id || !todo) {
                return state;
            }
            todo.status = status;
            newState = { ...state, ...{ byIds: todosByIds } };
            return newState;
        }

        case FILTER_TODO_BY: {
            const { filter } = payload;
            newState = { ...state, ...{ filter } };
            return newState;
        }

        default:
            return state;
    }
}