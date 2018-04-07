import { connect } from 'react-redux';
import TodoFilter from './todofilter';
import TodoPresenter from '../TodoPresenter';

// TODO: must import the logic for our container
const mapDispatchToProps = (dispatch) => ({
    onFilter: TodoPresenter.filterBy(dispatch)
});

const ContainerTodoFilter = connect(null, mapDispatchToProps)(TodoFilter);
export default ContainerTodoFilter;