import React from 'react';

import classes from './style.scss';

const Button = ({ children, styleButton }) => (
  <button type="button" className={classes.Button} style={styleButton}>
    {children}
  </button>
);

export default Button;
