// import other sagas here
import { all } from 'redux-saga/effects';
import weatherWatcherSaga from './weather.saga';

// add other sagas to the array below
export default function* mySaga() {
  yield all([weatherWatcherSaga()]);
}
