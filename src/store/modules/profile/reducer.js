import _ from 'lodash';
import * as actions from './actions';

const intitialState = {
	profile: null,
	updating: {},
	error: null,
};

const addToUpdating = (oldUpdating, updateData, value) => {
	const updating = _.clone(oldUpdating);
	_.each(updateData, (u, flag) => {
		if (_.has(updating, flag)) {
			updating[flag] += value;
		} else {
			updating[flag] = Math.max(0, value);
		}
	});
	return updating;
};

const profileReducer = (state = intitialState, action) => {
	switch (action.type) {
		case actions.UPDATE_INIT:
			return {
				...state,
				updating: addToUpdating(state.updating, action.updateData, 1),
				error: null,
			};
		case actions.UPDATE_SUCCESS:
			return {
				...state,
				updating: addToUpdating(state.updating, action.updateData, -1),
				profile: action.profile,
				error: null,
			};
		case actions.UPDATE_FAILURE:
			return {
				...state,
				updating: addToUpdating(state.updating, action.updateData, -1),
				profile: null,
				error: action.error,
			};
		default:
			return state;
	}
};

export default profileReducer;
