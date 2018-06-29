import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { auth } from '../store/modules/auth/actions';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
		this.updateUsername = this.updateUsername.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	updateUsername(e) {
		const username = e.target.value;
		this.setState({ username });
	}

	updatePassword(e) {
		const password = e.target.value;
		this.setState({ password });
	}

	handleSubmit(e) {
		this.props.login(this.state.username, this.state.password);
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<h2>Login</h2>
				<label htmlFor="username">
					Username:
					<input
						id="username"
						type="text"
						value={this.state.username}
						onChange={this.updateUsername}
					/>
				</label>
				<br />
				<label htmlFor="password">
					Password:
					<input
						id="password"
						type="password"
						value={this.state.password}
						onChange={this.updatePassword}
					/>
				</label>
				<br />
				{this.props.loggingIn ? (
					<div>
						<button disabled>Logging In</button>
						<div className="lds-spinner">
							<div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
						</div>
					</div>
				) : (
					<button onClick={this.handleSubmit}>Log In</button>
				)}
				{this.props.error && (
					<p className="error">Failed to log in: {this.props.error}</p>
				)}
			</div>
		);
	}
}

Login.propTypes = {
	loggingIn: PropTypes.bool.isRequired,
	error: PropTypes.string,
	login: PropTypes.func.isRequired,
};

Login.defaultProps = {
	error: null,
};

const mapStateToProps = ({ auth: { loggingIn, error } }) => ({ loggingIn, error });

const mapDispatchToProps = (dispatch) => ({
	login: (username, password) => dispatch(auth(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

