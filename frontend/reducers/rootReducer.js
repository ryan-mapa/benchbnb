import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import entitiesReducer from './entities/entitiesReducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer
})

export default rootReducer;