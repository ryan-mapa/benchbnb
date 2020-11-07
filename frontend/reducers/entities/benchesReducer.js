import { RECEIVE_BENCH } from "../../actions/benchActions";

const benchesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BENCH:
      return Object.assign({}, state, action.payload.benches)
    default:
      return state;
  }
}

export default benchesReducer;