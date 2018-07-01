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

const App = ({ auth }) => (
	<div>
		<h1>Fettler</h1>
		<BrowserRouter>
			<div>
				<Route exact path="/" component={auth.token ? Profile : Login} />
				<Route path="/about" component={About} />
			</div>
		</BrowserRouter>
	</div>
);

App.propTypes = {
	auth: PropTypes.shape({
		token: PropTypes.any,
	}).isRequired,
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(App);
