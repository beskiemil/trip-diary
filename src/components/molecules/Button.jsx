import { PropTypes } from 'prop-types';
import React from 'react';

const Button = ({
  children,
  className,
  type = 'button',
  onSubmit,
  disabled
}) => (
  <button
    type={type}
    onClick={onSubmit}
    disabled={disabled}
    className={`
      rounded-sm border-2 border-teal-500 bg-transparent p-2 font-bold tracking-wider transition-all 
      hover:bg-teal-500 hover:text-white ${className}`}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  onSubmit: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default Button;
