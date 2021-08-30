/**
 * Reducer for all the ui interactivity 
 */

import { types } from '../types/types';

const initialState = {
  snackbar: {
    info: "initial",
    isErr: false
  }
};

export const uiReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.setError:
      return {
        ...state,
        snackbar: action.payload,
      }
    case types.clearError:
      return {
        ...state,
        snackbar: {info: "", isErr: false}
      }  
    default:
      return state;
  }

};