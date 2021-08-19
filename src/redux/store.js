import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './rootReducer';
const { createStore, applyMiddleware } = require("redux");

const middlewares = [thunk]

if(process.env.NODE_ENV == 'development'){
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

