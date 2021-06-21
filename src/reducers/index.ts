import {combineReducers} from 'redux';

import countReducer from './countReducer';

const allReducers = combineReducers({
  count: countReducer,
});

const rootReducer = (state: any, action: any) => {
  return allReducers(state, action);
};

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
