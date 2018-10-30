import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import App from './App';
import store from './store';

axios.defaults.baseURL = 'https://ridemyway-danieladek.herokuapp.com/api/v1';

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
