import { combineReducers } from 'redux';
import authUserReducer from './authUser';

const rootReducer = combineReducers({
  authUser: authUserReducer
});

export default rootReducer;
