import { connect } from 'react-redux';
import Todos from './todos';
import TodoPresenter from './TodoPresenter';

const mapStateToProps = (state) => {
    const { todos: todoState } = state;
    const { ids, byIds, filter } = todoState;

    let todos = TodoPresenter.mapTodos(ids, byIds);
    todos = TodoPresenter.filterTodosBy(filter, todos);
    todos = TodoPresenter.sortTodo(todos);

    return {
        todos,
        filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: TodoPresenter.removeTodoById(dispatch),
        markTodoAsDone: TodoPresenter.markTodoAsDone(dispatch),
        markTodoAsPending: TodoPresenter.markTodoAsDone(dispatch),
    }
}

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Todos);

export default TodosContainer;