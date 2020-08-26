import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ADD_STRING } from './constants';
import { addStringSuccess, addStringFailure } from './actions';

import { axiosPost } from 'utils/request';
import { makeSelectInput } from './selectors';

/**
 * Github repos request/response handler
 */
export function* addStringToDb() {
  // Select username from store
  const inputString = yield select(makeSelectInput());
  const requestURL = '/strings/add-one';
  const options = {
    data: {
      string: inputString,
    },
  };

  try {
    yield call(axiosPost, requestURL, options);
    yield put(addStringSuccess());
  } catch (err) {
    yield put(addStringFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* stringInputData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ADD_STRING, addStringToDb);
}
