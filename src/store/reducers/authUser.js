import constants from '../constants';

const { SET_CURRENT_USER } = constants;

const initialState = {
  user: {}
};
const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default authUserReducer;
