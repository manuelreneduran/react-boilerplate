import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_STRINGS } from 'containers/App/constants';
import { stringsLoaded, stringsLoadingError } from 'containers/App/actions';
import { request } from 'utils/request';

/**
 * strings request/response handler
 */
export function* getStrings() {
  const requestURL = `/strings/all`;
  try {
    const data = yield call(request, requestURL);
    if (data.response && !data.response.ok) {
      throw new Error('Error retreiving strings, please try again');
    }
    yield put(stringsLoaded(data));

    //set strings to global state
  } catch (err) {
    yield put(stringsLoadingError(true));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* stringsData() {
  // Watches for LOAD_STRINGS actions and calls getStrings when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_STRINGS, getStrings);
}
