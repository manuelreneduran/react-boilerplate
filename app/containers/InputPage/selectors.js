import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectInputPage = state => state.inputPage || initialState;

const makeSelectInput = () =>
  createSelector(
    selectInputPage,
    inputPageState => inputPageState.data.stringInput,
  );

const makeSelectLoading = () =>
  createSelector(
    selectInputPage,
    inputPageState => inputPageState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectInputPage,
    inputPageState => inputPageState.error,
  );

const makeSelectComplete = () =>
  createSelector(
    selectInputPage,
    inputPageState => inputPageState.complete,
  );
export {
  selectInputPage,
  makeSelectInput,
  makeSelectLoading,
  makeSelectError,
  makeSelectComplete,
};
