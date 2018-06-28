import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { update } from '../store/modules/profile/actions';

const flags = {
	enabled: 'Enabled',
	autoAccept: 'Auto-accept friend requests',
};

const Profile = (props) => {
	const {
		profile,
		updating,
		error,
		updateProfile,
	} = props;

	let header;
	let body;

	if (profile) {
		header = (
			<h2>Profile Settings for {profile.nickname}</h2>
		);
		const checkboxes = _.map(flags, (label, flag) => (
			<div className="field" key={flag}>
				<div className="placeholder">
					{updating[flag] ? (
						<div className="lds-spinner">
							<div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
						</div>
					) : (
						<input
							type="checkbox"
							id="{flag}"
							checked={profile[flag]}
							onChange={(e) => updateProfile({ [flag]: e.target.checked })}
						/>
					)}
				</div>
				<div className="label">
					{label}
				</div>
			</div>
		));
		body = (
			<div>
				{checkboxes}
			</div>
		);
	} else {
		header = (
			<h2>Profile Settings</h2>
		);
		body = error ? (
			<div />
		) : (
			<div>
				<div className="lds-spinner">
					<div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
				</div>
				<p>Loading profile...</p>
			</div>
		);
	}

	return (
		<div>
			{header}
			{body}
			{error && (
				<p>Failed to load/update profile: {error}</p>
			)}
		</div>
	);
};

Profile.propTypes = {
	profile: PropTypes.shape({
		nickname: PropTypes.string.isRequired,
		enabled: PropTypes.bool.isRequired,
		autoAccept: PropTypes.bool,
	}),
	updating: PropTypes.shape({}),
	error: PropTypes.string,
	updateProfile: PropTypes.func.isRequired,
};

Profile.defaultProps = {
	profile: null,
	updating: {},
	error: null,
};

const mapStateToProps = (state) => ({
	profile: state.profile.profile,
	updating: state.profile.updating,
	error: state.profile.error,
});

const mapDispatchToProps = (dispatch) => ({
	updateProfile: (data) => dispatch(update(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
