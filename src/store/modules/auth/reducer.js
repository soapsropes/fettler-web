import * as actions from './actions';

const intitialState = {
	loggingIn: false,
	token: null,
	error: null,
};

const authReducer = (state = intitialState, action) => {
	switch (action.type) {
		case actions.AUTH_INIT:
			return {
				...state,
				loggingIn: true,
				error: null,
			};
		case actions.AUTH_SUCCESS:
			return {
				...state,
				loggingIn: false,
				token: action.token,
				error: null,
			};
		case actions.AUTH_FAILURE:
			console.log(`reduce auth failure error: ${action.error}`);
			return {
				...state,
				loggingIn: false,
				token: null,
				error: action.error,
			};
		default:
			return state;
	}
};

export default authReducer;
