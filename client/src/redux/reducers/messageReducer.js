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

    case types.clearMessage:
      return {
        ...state,
        messages: state.messages.filter(message => message.message !== action.payload.message)
      };

    case types.deleteAllMessage:
      return {
        ...state,
        messages: [],
      };
    default:
      return state;
  };
};