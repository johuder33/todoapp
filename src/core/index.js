import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import { store, history } from './store';
import Layout from './pages/Layout';
import { ROOT_PATH } from './constants';

const App = (props) => {
    return (
        <Provider store={store}>
             <ConnectedRouter history={history}>
                 <Route path={ROOT_PATH} component={Layout} />
             </ConnectedRouter>
         </Provider>
    );
}

export default App;