import axios from 'axios';
import constants from '../constants';
import handleError from '../../utils/handleError';

const {
  SET_CURRENT_USER,
  PROCESSING,
  SIGNUP_SUCCESSFUL,
  PROCESSING_FAILED
} = constants;

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const processing = () => ({
  type: PROCESSING
});

export const processingFailed = () => ({
  type: PROCESSING_FAILED
});

const signupSuccessful = user => ({
  type: SIGNUP_SUCCESSFUL,
  payload: user
});

export const sampleUser = () => () => {
  console.log('Action called!');
};

export const createAccount = (postData, history) => (dispatch) => {
  dispatch(processing());
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
      dispatch(processingFailed());
    });
};


export const loginUser = (postData, history) => (dispatch) => {
  dispatch(processing());
  return axios.post('/auth/login', postData)
    .then((response) => {
      console.log(response.data);
      const user = JSON.stringify(response.data.user);
      toastr.success(response.data.message);
      dispatch(setCurrentUser(response.data.user));
      localStorage.setItem('user', `${user}`);
      history.push('/create-ride');
    })
    .catch((error) => {
      handleError(error);
      dispatch(processingFailed());
    });
};
