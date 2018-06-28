import { ofType, combineEpics } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
	catchError,
	ignoreElements,
	map,
	mergeMap,
	tap,
	withLatestFrom,
} from 'rxjs/operators';
import config from '../../../config';
import * as actions from './actions';

const updateInitEpic = (action$, state$) =>
	action$.pipe(
		ofType(actions.UPDATE_INIT),
		withLatestFrom(state$),
		mergeMap(([action, state]) => {
			const { auth: { token } } = state;
			console.log('Updating profile');
			return ajax({
				url: `${config.apiUrl}/profile`,
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: {
					token,
					...action.updateData,
				},
			})
				.pipe(
					map(({ response }) => actions.updateSuccess(
						response.data,
						action.updateData,
					)),
					catchError((error) => of(actions.updateFailure(
						`${error}`,
						action.updateData,
					))),
				);
		}),
	);

const updateSuccessEpic = (action$) =>
	action$.pipe(
		ofType(actions.UPDATE_SUCCESS),
		tap(() => {
			console.log('Profile update success');
		}),
		ignoreElements(),
	);

const updateFailureEpic = (action$) =>
	action$.pipe(
		ofType(actions.UPDATE_FAILURE),
		tap(() => {
			console.log('Profile update failure');
		}),
		ignoreElements(),
	);

const profileEpic = combineEpics(
	updateInitEpic,
	updateSuccessEpic,
	updateFailureEpic,
);

export default profileEpic;
