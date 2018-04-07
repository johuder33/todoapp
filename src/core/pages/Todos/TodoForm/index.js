import { connect } from 'react-redux';
import TodoForm from './todoform';

// TODO: must import the logic for our container
const mapDispatchToProps = () => ({})
const ContainerTodoForm = connect(null, mapDispatchToProps)(TodoForm);
export default ContainerTodoForm;