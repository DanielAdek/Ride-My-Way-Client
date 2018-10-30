import React from 'react';

import classes from './style.scss';

const input = ({ name, labelTextContent, ...props }) => (
  <label htmlFor={name} className={classes.FormLabel}>
    {labelTextContent}
    <input name={name} {...props} />
  </label>
);
export default input;
