import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    TODO_STATUS
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
            state: TODO_STATUS.pending
        }
    };
}

export const markTodoAsDone = (id) => {
    return {
        type: UPDATE_TODO,
        payload: {
            id,
            state: TODO_STATUS.done
        }
    };
}