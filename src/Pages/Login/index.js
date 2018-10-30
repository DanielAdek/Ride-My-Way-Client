import React from 'react';

import Header from '../../containers/Header';
import LoginForm from '../../containers/Login';
import Footer from '../../containers/Footer';

import classes from './style.scss';

const LoginPage = () => (
  <div className={classes.Container}>
    <Header />
    <LoginForm />
    <Footer />
  </div>
);

export default LoginPage;
