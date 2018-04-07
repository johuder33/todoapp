import {
    removeTodo,
    markTodoAsDone,
    markTodoAsPending
} from './actions';

export default class TodoPresenter {
    static mapTodos(ids, byIds) {
        let todos = [];
        
        if (ids && byIds) {
            todos = ids.map((id) => byIds[id]);
        }

        return todos;
    }

    static filterTodosBy = (filter, todos) => {
        if (!filter) {
            return todos;
        }
        return todos.filter((todo) => todo.status === filter)
    }

    static removeTodoById(dispatch) {
        return (id) => {
            if (id) {
                return dispatch(removeTodo(id));
            }
        }
    }

    static markTodoAsDone(dispatch) {
        return (id) => {
            if (id) {
                return dispatch(markTodoAsDone(id));
            }
        }
    }

    static markTodoAsPending(dispatch) {
        return (id) => {
            if (id) {
                return dispatch(markTodoAsPending(id));
            }
        }
    }
}