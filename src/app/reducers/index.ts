import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';

// tslint:disable-next-line:no-empty-interface
export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (action, state) => {
    console.log('state before: ', state);
    console.log('action', action);

    return reducer(action, state);
  };
}


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
