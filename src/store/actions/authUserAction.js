import axios from 'axios';
import constants from '../constants';
import handleError from '../../utils/handleError';

const {
  SET_CURRENT_USER,
  SIGNUP_PROCESSING,
  SIGNUP_SUCCESSFUL,
  SIGNUP_UNSUCCESSFUL
} = constants;

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user.data
});

export const signupProcessing = () => ({
  type: SIGNUP_PROCESSING
});

export const signupFailed = () => ({
  type: SIGNUP_UNSUCCESSFUL
});

const signupSuccessful = user => ({
  type: SIGNUP_SUCCESSFUL,
  payload: user
});

export const sampleUser = () => () => {
  console.log('Action called!');
};

export const createAccount = (postData, history) => (dispatch) => {
  dispatch(signupProcessing());
  return axios.post('/auth/signup', postData)
    .then((response) => {
      console.log(response.data);
      const user = JSON.stringify(response.data.user);
      toastr.success(response.data.message);
      dispatch(signupSuccessful(response.data.user));
      localStorage.setItem('user', `${user}`);
      history.push('/create-ride');
    })
    .catch((error) => {
      handleError(error);
      dispatch(signupFailed());
    });
};
