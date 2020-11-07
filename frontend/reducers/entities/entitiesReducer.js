import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import benchesReducer from './benchesReducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  benches: benchesReducer
})

export default entitiesReducer;