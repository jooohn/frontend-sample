// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/scenes/App';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { configureStore } from './app/flux';
import { CssBaseline } from '@material-ui/core';

const history = createHistory();
const store = configureStore({ history });

const root = document.getElementById('root');
if (root != null) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <React.Fragment>
          <CssBaseline />
          <App />
        </React.Fragment>
      </ConnectedRouter>
    </Provider>,
    root
  );
  registerServiceWorker();
}
