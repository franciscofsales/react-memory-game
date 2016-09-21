import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';
import App from './App';
import './index.css';

const logger = createLogger();
const store = createStore(
  reducers,
  applyMiddleware(promiseMiddleware, thunk, logger)
);

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
      </Provider>
  ),
  document.getElementById('root')
);
