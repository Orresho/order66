import React, { Component, Fragment } from 'react';
import { Input, Select } from '../CustomInputs';
import { Link } from 'react-router-dom';

class BoxCalculator extends Component {
  render() {
    const { onChangeHandler, onSubmit, header, disabled, errors, name, weight, countries } = this.props;
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
            maxLength="15"
            value={name}
            errorMessage={errors[0] && errors[0].nameError}
            onChange={(e) => onChangeHandler(e, "name")}
          />
          <Input
            type="number"
            name="weight"
            title="Weight"
            max="300"
            value={weight}
            errorMessage={errors[0] && errors[0].weightError}
            onChange={(e) => onChangeHandler(e, "weight")}
          />
          <Input
            type="color"
            name="color"
            title="Pick box color"
            disabled={disabled}
            onChange={(e) => onChangeHandler(e, "color")}
          />
          <Select
            type="select"
            options={countries}
            name="destination_country"
            title="Destination Country"
            onChange={(e) => onChangeHandler(e, "destination_country")}
          />
          <button disabled={this.props.disabledButton} className="primary-button" >Save</button>
        </form>

        <div className="view-table-action">
          <Link className="button secondary-button" to="/listboxes">View saved caluculations</Link>
        </div>
      </Fragment>
    );
  }
}

export default BoxCalculator;