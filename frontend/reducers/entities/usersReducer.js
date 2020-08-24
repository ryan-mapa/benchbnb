import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../../actions/sessionActions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(newState, action.user);
    case LOGOUT_CURRENT_USER:
      delete newState[Object.keys(action.user)[0]];
      return newState;
    default:
      return state;
  }
}

export default usersReducer;