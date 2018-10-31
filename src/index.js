import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import App from './App';
import store from './store';
import { setCurrentUser } from './store/actions/authUserAction';
import setAuthHead from './utils/setAuthHeader';

axios.defaults.baseURL = 'https://ridemyway-danieladek.herokuapp.com/api/v1';

if (localStorage.user) {
  const user = JSON.parse(localStorage.getItem('user'));
  store.dispatch(setCurrentUser(user));
  setAuthHead(user.token);
}

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
