import React from 'react'
import ReactDOM from 'react-dom'
import MessageList from './components/MessageList'

// redux importing
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <MessageList />
  </Provider>,
  rootElement
);
