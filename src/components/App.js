import React from 'react';
import {
	Route,
	BrowserRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from './Login';
import Profile from './Profile';
import About from './About';
import config from '../config';

const App = ({ auth }) => {
	const qualifier = config.qualifier ? ` (${config.qualifier})` : '';
	const title = `Fettler${qualifier}`;
	return (
		<div>
			<h1>{title}</h1>
			<BrowserRouter>
				<div>
					<Route exact path="/" component={auth.token ? Profile : Login} />
					<Route path="/about" component={About} />
				</div>
			</BrowserRouter>
		</div>
	);
};

App.propTypes = {
	auth: PropTypes.shape({
		token: PropTypes.any,
	}).isRequired,
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(App);
