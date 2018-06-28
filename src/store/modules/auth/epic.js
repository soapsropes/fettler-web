import { ofType, combineEpics } from 'redux-observable';
import {
	ignoreElements,
	map,
	mergeMap,
	tap,
} from 'rxjs/operators';
import FetLife from 'fetlife';
import * as actions from './actions';
import { update } from '../profile/actions';

const authInitEpic = (action$) =>
	action$.pipe(
		ofType(actions.AUTH_INIT),
		mergeMap(({ username, password }) => {
			console.log(`Attempting FetLife login as '${username}'`);
			const fetlife = new FetLife();
			return fetlife.login(username, password)
				.then(() => fetlife.getAccessToken())
				.then((token) => actions.authSuccess(token))
				.catch((error) => actions.authFailure(`${error}`));
		}),
	);

const authSuccessEpic = (action$) =>
	action$.pipe(
		ofType(actions.AUTH_SUCCESS),
		tap(() => {
			console.log('Authentication success, fetching profile');
		}),
		map(() => update({})),
	);

const authFailureEpic = (action$) =>
	action$.pipe(
		ofType(actions.AUTH_FAILURE),
		tap(() => {
			console.log('Authentication failure');
		}),
		ignoreElements(),
	);

const authEpic = combineEpics(
	authInitEpic,
	authSuccessEpic,
	authFailureEpic,
);

export default authEpic;
