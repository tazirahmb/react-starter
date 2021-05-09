import React from 'react';
import { any } from 'prop-types';

const Button = ({ children, ...rest }) => <button {...rest}>{children}</button>;

Button.propTypes = {
  children: any,
};

export default Button;
