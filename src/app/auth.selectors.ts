import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from './auth/reducers';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn = createSelector(
  state => state['auth'],
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);
