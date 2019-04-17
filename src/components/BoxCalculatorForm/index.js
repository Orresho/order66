import React, { Component, Fragment } from 'react';
import { Input, Select } from '../CustomInputs';
import { Link } from 'react-router-dom';

class BoxCalculator extends Component {
  render() {
    const { onChangeHandler, onSubmit, header, disabled, errors, name, weight, countries } = this.props;
    console.log(errors)
    return (
      <Fragment>
        <div className="box-reg-form-header">
          <h2>{header}</h2>
        </div>
        <form onSubmit={onSubmit} className="box-reg-form">
          <Input
            type="text"
            name="name"
            title="Name"
            value={name}
            errorMessage={errors && errors.nameError}
            onChange={(e) => onChangeHandler(e, "name")}
            required
          />
          <Input
            type="number"
            name="weight"
            title="Weight"
            value={weight}
            errorMessage={errors && errors.weightError}
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
            errorMessage={errors && errors.destinationCountryError}
            onChange={(e) => onChangeHandler(e, "destination_country")}
            required
          />
          <button disabled={disabled} className="primary-button" >Save</button>
        </form>

        <div className="view-table-action">
          <Link className="button secondary-button" to="/listboxes">View saved caluculations</Link>
        </div>
      </Fragment>
    );
  }
}

export default BoxCalculator;