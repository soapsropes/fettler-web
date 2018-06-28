export const AUTH_INIT = 'profile/AUTH_INIT';
export const AUTH_SUCCESS = 'profile/AUTH_SUCCESS';
export const AUTH_FAILURE = 'profile/AUTH_FAILURE';

export const auth = (username, password) => ({
	type: AUTH_INIT,
	username,
	password,
});
export const authSuccess = (token) => ({ type: AUTH_SUCCESS, token });
export const authFailure = (error) => ({ type: AUTH_FAILURE, error });
