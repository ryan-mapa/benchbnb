import { RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from '../../actions/sessionActions';

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      // const err = action.errors
      // return Array.isArray(err) ? { generalErrors: err } : err;
      return action.errors
    case CLEAR_SESSION_ERRORS:
      return {};
    default:
      return state;
  }
}

export default sessionErrorsReducer;