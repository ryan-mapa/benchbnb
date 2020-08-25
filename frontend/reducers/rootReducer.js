import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import entitiesReducer from './entities/entitiesReducer';
import errorsReducer from './errors/errorsReducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer
})

export default rootReducer;