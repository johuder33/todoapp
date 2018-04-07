import { connect } from 'react-redux';
import TodoForm from './todoform';
import TodoPresenter from '../TodoPresenter';

// TODO: must import the logic for our container
const mapDispatchToProps = (dispatch) => ({
    addTodo: TodoPresenter.addTodo(dispatch)
});

const ContainerTodoForm = connect(null, mapDispatchToProps)(TodoForm);
export default ContainerTodoForm;