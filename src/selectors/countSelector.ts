import { AppState } from 'redux/reducers'

export const countSelector = (state: AppState) => ({ count: state.count.count })
