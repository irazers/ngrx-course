import { createReducer, on } from '@ngrx/store';

import { AuthActions } from '../action-types';
import { User } from '../model/user.model';

export interface AuthState {
  user: User;
}

export const initialState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    };
  }),
  on(AuthActions.logout, () => {
    return {
      user: undefined
    };
  })
);
