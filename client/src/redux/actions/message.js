import { types } from '../types/types';

export const addMessage = payload => ({
  type: types.addMessage,
  payload: payload,
});

export const clearMessage = payload => ({
  type: types.clearMessage,
  payload: payload,
});

export const deleteAllMessage = () => ({
  type: types.deleteAllMessage
});