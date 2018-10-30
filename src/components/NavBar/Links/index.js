import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classes from './style.scss';

const Navlink = ({ url, linkText }) => (
  <Link to={url} className={classes.styleLinks}>{linkText}</Link>
);

Navlink.proptype = {
  url: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};

export default Navlink;
