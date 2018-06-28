import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import auth, { authEpic } from './auth';
import profile, { profileEpic } from './profile';

export const rootEpic = combineEpics(authEpic, profileEpic);
export const rootReducer = combineReducers({ auth, profile });
