import { connect } from 'react-redux';
import Todos from './todos';

const mapStateToProps = (state) => {
    const { todos: todoState } = state;
    const { ids, byIds } = todoState;

    const todos = ids.map((id) => {
        return byIds[id];
    })

    return {
        todos
    };
};

const TodosContainer = connect(mapStateToProps)(Todos);

export default TodosContainer;