/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store/create';
import App from './components/App';
import './style/index.css';

const store = createStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
