import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from './Login';
import Profile from './Profile';

const App = ({ auth }) => (
	<div>
		<h1>Fettler</h1>
		{ auth.token ? (
			<Profile />
		) : (
			<Login />
		)}
	</div>
);

App.propTypes = {
	auth: PropTypes.shape({
		token: PropTypes.any,
	}).isRequired,
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(App);
