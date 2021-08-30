import { types } from '../types/types';

const initialState = {
  messages: [],
};

export const messageReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.addMessage:
      return {
        ...state,
        messages: [action.payload, ...state.messages]
      };
    default:
      return state;
      break;
  };
};