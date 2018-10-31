
const initialState = {
  ride: {},
};
const rideReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_RIDE':
      return {
        ...state,
        ride: action.payload
      };
    default:
      return state;
  }
};

export default rideReducer;
