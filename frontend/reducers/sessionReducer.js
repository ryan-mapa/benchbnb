import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/sessionActions';

const defaultState = {currentUserId: null}

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: Object.values(action.user)[0].id };
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return state;
  }
}

export default sessionReducer;