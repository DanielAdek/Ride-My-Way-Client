import React from 'react';

import NavBar from '../../components/NavBar';
import Navlink from '../../components/NavBar/Links';
import Logo from '../../components/Logo';

import classes from './style.scss';

const Header = () => (
  <div className={classes.Header}>
    <Logo />
    <NavBar>
      <Navlink url="/login" linkText="Login" />
      <Navlink url="/signup" linkText="Signup" />
      <Navlink url="/all-rides" linkText="All Rides" />
    </NavBar>
  </div>
);

export default Header;
