import React from 'react';

import Header from '../../containers/Header';
import SignupForm from '../../containers/Signup';
import Footer from '../../containers/Footer';

import classes from './style.scss';

const SignupPage = () => (
  <div className={classes.Container}>
    <Header />
    <SignupForm />
    <Footer />
  </div>
);

export default SignupPage;
