
import reducer from './reducer.js';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const Store = createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk, logger)));

export default Store;
