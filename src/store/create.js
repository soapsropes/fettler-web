/* eslint-env browser */

import {
	applyMiddleware,
	compose,
	createStore,
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { rootEpic, rootReducer } from './modules';

/* eslint-disable-next-line no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const create = () => {
	const epicMiddleware = createEpicMiddleware();
	const store = createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(epicMiddleware)),
	);
	epicMiddleware.run(rootEpic);
	return store;
};

export default create;
