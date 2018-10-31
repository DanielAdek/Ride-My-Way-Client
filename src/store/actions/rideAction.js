import axios from 'axios';
import constants from '../constants';
import handleError from '../../utils/handleError';

const {
  PROCESSING,
  PROCESSING_FAILED
} = constants;

export const processing = () => ({
  type: PROCESSING
});

export const processingFailed = () => ({
  type: PROCESSING_FAILED
});

const createRideAction = ride => ({
  type: 'CREATE_RIDE',
  payload: ride
});

export const createRideOffer = postData => (dispatch) => {
  dispatch(processing());
  return axios.post('/users/rides', postData)
    .then((response) => {
      console.log(response.data);
      toastr.success(response.data.message);
      dispatch(createRideAction(response.data.ride));
    })
    .catch((error) => {
      handleError(error);
      dispatch(processingFailed());
    });
};
