import { types } from '../types/types';

const initialState = {
  messages: [],
};

export const messageReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.addMessage:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };
    default:
      return state;
      break;
  };
};