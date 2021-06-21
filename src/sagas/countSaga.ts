import {takeLatest, all} from 'redux-saga/effects';
import {countService} from 'services/countServices';
import {CountActionTypes} from 'types/countTypes';

export function* countSaga() {
  // handle logic
  countService();
}

export default function* countSagas() {
  yield all([takeLatest(CountActionTypes.INCREMENT, countSaga)]);
}
