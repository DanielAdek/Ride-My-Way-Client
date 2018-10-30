import constants from '../constants';

const {
  SET_CURRENT_USER
} = constants;

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user.data
});

export const sampleUser = () => () => {
  console.log('Action called!');
};
