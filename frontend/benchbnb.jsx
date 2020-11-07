import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'

//for development only
import * as SessionApitUtil from './util/sessionApiUtil';
import * as sessionActions from './actions/sessionActions';
import { fetchBench } from './actions/benchActions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  let preloadedState;
  if (window.currentUser === undefined) {
    preloadedState = {};
  } else {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: { currentUserId: window.currentUser.id }
    };
    window.currentUser = null; // remove the currentUser info from the window
  }
  
  const store = configureStore(preloadedState);

  // for development only
  window.store = store;
  window.sessionAPI = SessionApitUtil;
  window.sessionActions = sessionActions;
  window.fetchBench = fetchBench;

  ReactDOM.render(<Root store={store} />, root);
})