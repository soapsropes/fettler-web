export const UPDATE_INIT = 'profile/UPDATE_INIT';
export const UPDATE_SUCCESS = 'profile/UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'profile/UPDATE_FAILURE';

export const update = (updateData) => ({ type: UPDATE_INIT, updateData });

export const updateSuccess = (profile, updateData) => ({
	profile,
	updateData,
	type: UPDATE_SUCCESS,
});

export const updateFailure = (error, updateData) => ({
	error,
	updateData,
	type: UPDATE_FAILURE,
});
