import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { messageReducer } from '../reducers/messageReducer'
import ReduxThunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  message: messageReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(
      applyMiddleware( ReduxThunk )
  )
);