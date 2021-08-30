import { types } from '../types/types';

export const addMessage = payload => ({
  type: types.addMessage,
  payload: payload,
});