import React, { Component, Fragment } from 'react';
import { Input, Select } from '../CustomInputs';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Notification from '../Notification';

class BoxCalculator extends Component {
  render() {
    const { onChangeHandler, onSubmit, header, disabled, errors, name, weight, countries, showNotification, destination_country } = this.props;
    return (
      <Fragment>
        {header && (
          <div className="box-reg-form-header">
            <h2>{header}</h2>
          </div>
        )}

        <div className="Notification-wrapper">
          {showNotification && (
            <Notification message="Cost successfully calculated and saved" />
          )}
        </div>
        <form onSubmit={onSubmit} className="box-reg-form">
          <Input
            type="text"
            name="name"
            title="Name"
            value={name}
            error={errors && errors.nameError && errors.nameError}
            onChange={(e) => onChangeHandler(e, "name")}
            required
          />
          <Input
            type="number"
            name="weight"
            title="Weight"
            value={weight}
            error={errors && errors.weightError}
            onChange={(e) => onChangeHandler(e, "weight")}
            required
          />
          <Input
            type="color"
            name="color"
            title="Pick box color"
            disabled={disabled}
            onChange={(e) => onChangeHandler(e, "color")}
            required
          />
          <Select
            type="select"
            options={countries}
            name="destination_country"
            title="Destination Country"
            error={errors && errors.destinationCountryError}
            onChange={(e) => onChangeHandler(e, "destination_country")}
            required
          />
          <button disabled={disabled} className="cy-save primary-button" >Save</button>
        </form>

        <div className="view-table-action">
          <Link className="button secondary-button" to="/listboxes">View saved caluculations</Link>
        </div>
      </Fragment>
    );
  }
}

BoxCalculator.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  header: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  errors: PropTypes.object,
  name: PropTypes.string,
  weight: PropTypes.string,
  countries: PropTypes.array.isRequired
}

export default BoxCalculator;