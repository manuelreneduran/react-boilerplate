import produce from 'immer';
import {
  CHANGE_STRING_INPUT,
  ADD_STRING_SUCCESS,
  ADD_STRING_FAILURE,
  ADD_STRING,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  complete: false,
  data: {
    stringInput: '',
  },
};

/* eslint-disable default-case, no-param-reassign */
const inputReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_STRING_INPUT:
        // Delete prefixed '@' from the github username
        draft.data.stringInput = action.stringInput;
        draft.complete = false;
        draft.error = false;
        break;
      case ADD_STRING:
        draft.loading = true;
        draft.error = false;
        draft.complete = false;
        break;
      case ADD_STRING_SUCCESS:
        draft.complete = true;
        draft.loading = false;
        draft.error = false;
        draft.data.stringInput = '';
        break;
      case ADD_STRING_FAILURE:
        draft.complete = true;
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default inputReducer;
