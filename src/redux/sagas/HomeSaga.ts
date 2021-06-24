import { all, takeLatest } from 'redux-saga/effects'
import { homeService } from 'services/HomeServices'
import { HomeActionTypes } from 'types/HomeTypes'

export function* homeSaga() {
  // handle logic
  homeService()
}

export default function* homeSagas() {
  yield all([takeLatest(HomeActionTypes.INCREMENT, homeSaga)])
}
