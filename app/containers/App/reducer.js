import produce from 'immer';
import {
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS,
  LOAD_STRINGS_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  data: {
    strings: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_STRINGS:
        draft.loading = true;
        draft.error = false;
        draft.data.strings = false;
        break;

      case LOAD_STRINGS_SUCCESS:
        draft.data.strings = action.strings;
        draft.loading = false;
        break;

      case LOAD_STRINGS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
