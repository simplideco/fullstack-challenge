import { types } from '../types/types';

const initialState = {
  messages: [
    {message: "message important of the application.", priority: 1},
    {message: "message important of the application.", priority: 2},
    {message: "message important of the application.", priority: 3},
    {message: "message important of the application.", priority: 1},
    {message: "message important of the application.", priority: 3},
  ],
  stopGeneration: false,
};

export const messageReducer = (state = initialState, action) => {
  return state;
};