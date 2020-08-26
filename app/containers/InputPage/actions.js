import {
  CHANGE_STRING_INPUT,
  ADD_STRING,
  ADD_STRING_SUCCESS,
  ADD_STRING_FAILURE,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} stringInput The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_STRING_INPUT
 */
export function changeStringInput(stringInput) {
  return {
    type: CHANGE_STRING_INPUT,
    stringInput,
  };
}

/**
 * Add a string to DB, this action starts request saga
 *
 * @return {object}     An action object with a type of ADD_STRING
 */
export function addString() {
  return {
    type: ADD_STRING,
  };
}

/**
 * Dispatched when the string is added to db by the request saga
 *
 * @return {object}      An action object with a type of ADD_STRING_SUCCESS passing the repos
 */
export function addStringSuccess() {
  return {
    type: ADD_STRING_SUCCESS,
  };
}

/**
 * Dispatched when adding a string to DB fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of ADD_STRING_ERROR passing the error
 */
export function addStringFailure(error) {
  return {
    type: ADD_STRING_FAILURE,
    error,
  };
}
