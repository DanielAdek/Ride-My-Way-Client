import constants from '../constants';

const {
  SET_CURRENT_USER,
  SIGNUP_PROCESSING,
  SIGNUP_SUCCESSFUL,
  SIGNUP_UNSUCCESSFUL
} = constants;

const initialState = {
  user: {},
  isAuthenticated: false,
  loading: false,
};
const authUserReducer = (state = initialState, action) => {
  console.log(action, '-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-');
  switch (action.type) {
    case SIGNUP_PROCESSING:
      return {
        ...state,
        loading: true
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };
    case SIGNUP_SUCCESSFUL:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case SIGNUP_UNSUCCESSFUL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default authUserReducer;
