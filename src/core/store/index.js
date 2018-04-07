import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();
const middleware = routerMiddleware(history);

export const store = createStore(
    reducers,
    undefined,
    applyMiddleware(middleware)
);