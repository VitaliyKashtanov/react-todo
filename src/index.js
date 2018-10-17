import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import * as firebase from 'firebase';
import { DB_CONFIG } from './Config/config';
import registerServiceWorker from './registerServiceWorker';

export const store = createStore(reducer, applyMiddleware(thunk, reduxLogger));
firebase.initializeApp(DB_CONFIG);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
