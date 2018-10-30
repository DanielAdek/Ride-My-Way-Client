import React from 'react';

import classes from './style.scss';

const Button = ({
  children, styleButton, click, disabled
}) => (
  <button
    type="button"
    className={classes.Button}
    style={styleButton}
    onClick={click}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
