import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'

//for development only
import * as SessionApitUtil from './util/sessionApiUtil';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  
  // for development only
  window.store = store;
  window.sessionAPI = SessionApitUtil;
  console.log("currentUser: ", window.currentUser);

  ReactDOM.render(<Root store={store} />, root);
})