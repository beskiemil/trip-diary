import { PropTypes } from 'prop-types';
import React from 'react';

const Input = ({
  type,
  placeholder,
  disabled = false,
  name,
  id,
  value,
  onChange,
  className
}) => (
  <input
    type={type}
    placeholder={placeholder}
    name={name}
    id={id}
    value={value}
    onChange={onChange}
    className={`
      border-b-2 border-gray-300 p-2 tracking-wide
      hover:mb-[2px] hover:border-none hover:shadow-md hover:outline hover:outline-2 hover:outline-teal-500
      focus:mb-[2px] focus:border-none focus:outline focus:outline-2 focus:outline-teal-500
      ${className}`}
    disabled={disabled}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

export default Input;
