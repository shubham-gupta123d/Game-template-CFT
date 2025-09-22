import { all } from 'redux-saga/effects';

function* lottoSaga() {
  // put your sagas here if needed
}

export default function* rootSaga() {
  yield all([lottoSaga()]);
}
