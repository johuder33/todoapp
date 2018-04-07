import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// TODO: replace with combineReducers object already done
const customReducer = (state = {}) => state;
const reducers = combineReducers({
    customReducer,
    router: routerReducer
});

export const history = createHistory();
const middleware = routerMiddleware(history);

export const store = createStore(
    reducers,
    undefined,
    applyMiddleware(middleware)
);