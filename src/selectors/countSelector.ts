import {AppState} from 'reducers';

export const countSelector = (state: AppState) => ({count: state.count.count});
