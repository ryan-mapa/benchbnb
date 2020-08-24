import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  session: () => ({})
})

export default rootReducer;