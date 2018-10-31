import constants from '../constants';

const {
  SET_CURRENT_USER,
  PROCESSING,
  SIGNUP_SUCCESSFUL,
  PROCESSING_FAILED
} = constants;

const initialState = {
  user: {},
  isAuthenticated: false,
  loading: false,
};
const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROCESSING:
      return {
        ...state,
        loading: true
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case SIGNUP_SUCCESSFUL:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case PROCESSING_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default authUserReducer;
