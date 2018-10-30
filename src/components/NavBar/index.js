import React from 'react';
import PropTypes from 'prop-types';

import classes from './style.scss';

const Navbar = ({ children }) => (
  <nav className={classes.NavContainer}>
    { children }
  </nav>
);

Navbar.proptype = {
  children: PropTypes.isRequired
};

export default Navbar;
