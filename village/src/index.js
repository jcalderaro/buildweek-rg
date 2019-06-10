////////////////////////////////////////

/* REACT ATTEMPT  

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

REACT ATTEMPT */

////////////////////////////////////////

/* REDUX ATTEMPT */ 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './react-components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

////////////////////////////////////////

const store = createStore(rootReducer, applyMiddleware(thunk,logger) );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

////////////////////////////////////////