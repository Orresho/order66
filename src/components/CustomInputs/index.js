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
  errorMessage, 
  isFocusing, 
  onChange, 
  name, 
  min,
  max, 
  value, 
  minLength, 
  maxLength, 
  autoFocus }) => (

  <div className={`custom_input_field ${isFocusing ? 'input_focus' : ''}`}>
    {title && <label className="title">{title}</label>}
    <input
      min={min}
      max={max}
      minLength={minLength}
      maxLength={maxLength}
      value={value || ''}
      type={type}
      name={name}
      onChange={onChange}
      autoComplete="Off"
      autoFocus={autoFocus}
      required
    />
    {errorMessage && <div className="error-message">{errorMessage || ''}</div>}
  </div>
);

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  error: PropTypes.string,
  isFocusing: PropTypes.func,
  onChange: PropTypes.func.isRequired
}

/**
 * Basic Select field that returns a label and options, no errors since first value should be pre selected
 */
export const Select = ({ title, type, error, isFocusing, onChange, name, options, value }) => {

  const _generateOptions = () => {
    if (!options) return false;

    return options.map((item, index) => (
      <option key={index} value={item.value}>
        {item.label || ''}
      </option>
    ));
  };

  return (
    <div className={`custom_select_field ${isFocusing ? 'input_focus' : ''}`}>
      {title && <label className="title">{title}</label>}
      <select
        type={type}
        name={name}
        onChange={onChange}
        defaultValue={options ? options[0].value : ''}>

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