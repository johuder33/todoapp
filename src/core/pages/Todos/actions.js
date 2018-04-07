import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    TODO_STATUS,
    FILTER_TODO_BY
} from '../../constants';

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: {
            id
        }
    };
}

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: {
            ...todo
        }
    };
}

export const markTodoAsPending = (id) => {
    return {
        type: UPDATE_TODO,
        payload: {
            id,
            status: TODO_STATUS.pending
        }
    };
}

export const markTodoAsDone = (id) => {
    return {
        type: UPDATE_TODO,
        payload: {
            id,
            status: TODO_STATUS.done
        }
    };
}

export const filterBy = (filter) => {
    return {
        type: FILTER_TODO_BY,
        payload: {
            filter
        }
    }
}