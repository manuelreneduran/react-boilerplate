/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectStrings = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.data.strings,
  );

export { selectGlobal, makeSelectLoading, makeSelectError, makeSelectStrings };
