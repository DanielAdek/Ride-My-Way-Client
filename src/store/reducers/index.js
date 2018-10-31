import { combineReducers } from 'redux';
import authUserReducer from './authUser';
import rideReducer from './rideReducer';

const rootReducer = combineReducers({
  authUser: authUserReducer,
  rideReducer
});

export default rootReducer;
