import React from 'react';
import { Provider } from 'react-redux';
import App from './app';

const Root = (props) => (
  <>
    <h1>I am the Root component</h1>
    <Provider store={props.store}>
      <App />
    </Provider>
  </>
)

export default Root;