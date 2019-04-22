import React from 'react';
import PropTypes from 'prop-types';

/**
 * In this file we organize some reusable form field components that provide us with type checking as well
 * as a consistent way of handling our form fields throughout the app.
 */


/**
 * Basic Input field that can be of any type and returns a label, the field and any occuring validation errors
 */
export const Input = ({ 
  title, 
  type, 
  error, 
  isFocusing, 
  onChange, 
  value, 
  autoFocus,
  ...other
}) => (
  <div className={'custom_input_field'}>
    {title && <label className="title">{title}</label>}
    <input
      {...other}
      value={value || ''}
      type={type}
      onChange={onChange}
      autoComplete="Off"
      autoFocus={autoFocus}
    />
    {error && <div className="error-message">{error || ''}</div>}
  </div>
);

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFocusing: PropTypes.func,
  onChange: PropTypes.func.isRequired
}

/**
 * Basic Select field that returns a label and options, no errors since first value should be pre selected
 */
export const Select = ({ title, type, error, onChange, options, ...rest }) => {

  const _generateOptions = () => {
    if (!options) return false;

    return options.map((item, index) => (
      <option key={index} value={item.value}>
        {item.label || ''}
      </option>
    ));
  };

  return (
    <div className="custom_select_field">
      {title && <label className="title">{title}</label>}
      <select
        {...rest}
        type={type}
        onChange={onChange}>

        {_generateOptions()}
      </select>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFocusing: PropTypes.func,
  onChange: PropTypes.func.isRequired
}