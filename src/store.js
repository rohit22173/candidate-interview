import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import candidateReducer from './reducers/candidateReducer';

export default createStore(
	combineReducers({
		candidateReducer
	}),
	{},
	applyMiddleware(logger, thunk, promise())
);