import { types } from '../types/types';

export const setError = payload => ({
  type: types.setError,
  payload: payload,
});

export const clearError = () => ({
  type: types.clearError,
});