import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { todosReducer } from './todosReducer';

const reducers = combineReducers({
    todos: todosReducer,
    router: routerReducer
});

export default reducers;