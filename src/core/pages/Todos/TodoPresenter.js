import moment from 'moment';
import {
    removeTodo,
    markTodoAsDone,
    markTodoAsPending,
    addTodo,
    filterBy
} from './actions';
import { TODO_STATUS } from '../../constants';

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

    static sortTodo = (todos) => {
        return todos.sort((t1, t2) => t2.ts - t1.ts);
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

    static TsToDate(ts) {
        if (!ts) {
            return 'now';
        }

        return moment(ts).format('DD/MM/YYYY HH:mm:ss');
    }

    static addTodo(dispatch) {
        return (todo) => dispatch(addTodo(todo))
    }

    static onChangeValueForm(event) {
        const { value } = event.target;

        this.setState({ todo: value });
    }

    static onSaveTodo(description) {
        if (!description || !description.trim().length) {
            return this.setState({ error: 'New todo need a description' });
        }

        const todo = TodoPresenter.makeTodo(description);
        const { addTodo } = this.props;

        // create the todo
        addTodo(todo);

        // clear our form state
        this.setState({ error: '', todo: '' });
    }

    static makeTodo(description) {
        const id = Date.now();
        return {
            id,
            description,
            ts: id,
            status: TODO_STATUS.pending
        }
    }

    static filterBy = (dispatch) => {
        return (filter) => {
            if (filter) {
                dispatch(filterBy(filter));
            }
        }
    }

    static onFilter(filter) {
        const { onFilter } = this.props;

        onFilter(filter);
    }
}