// @flow
import { applyMiddleware, combineReducers, createStore } from 'redux';
import todos from './todos/index';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import type { BrowserHistory } from 'history';

type Config = {
  history: BrowserHistory
};

export const configureStore = (config: Config) =>
  createStore(
    combineReducers({
      todos,
      router: routerReducer
    }),
    composeWithDevTools(applyMiddleware(routerMiddleware(config.history)))
  );
