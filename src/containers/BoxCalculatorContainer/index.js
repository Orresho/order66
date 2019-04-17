import React, { Component } from 'react';
import BoxCalculator from '../../components/BoxCalculatorForm';
import { DestinationCountries } from '../../_config/common';

import './style.scss';

const VALUES = {
  // Text field - name
  MINLENGTH: "5",
  MAXLENGTH: "15",

  // Number field - weight
  MIN: "0",
  MAX: "5"
}

const initialState = {
  name: null,
  weight: null,
  box_color: null,
  destination_country: DestinationCountries[0].value, // Default selected country
}

class BoxCalculatorContainer extends Component {

  state = {
    ...initialState,
    errors: {},
    disabled: false,
  };

  colorValidation = () => {
    // do color validation disabling all blue colors
  }

  formIsValid = () => {
    const { name, weight, box_color, destination_country } = this.state;

    let errors = {};
    let formIsValid = true;
    let resetWeight = false;

    // Name validation
    if (name.length > VALUES.MAXLENGTH) {
      errors.nameError = `Name has to be less than ${VALUES.MAXLENGTH} characters`
      formIsValid = false;
    } else if (name.length < VALUES.MINLENGTH) {
      errors.nameError = `Name can't be below ${VALUES.MINLENGTH} characters`
      formIsValid = false;
    }

    // Weight validation
    if (weight < VALUES.MIN) {
      errors.weightError = 'Negative values are not permitted, please enter a valid weight'
      formIsValid = false;
      resetWeight = true;
    } else if (weight > VALUES.MAX) {
      errors.weightError = `Box can't weight more than ${VALUES.MAX} kg`
      formIsValid = false;
    }

    // Destination error
    if (destination_country.length < 1) {
      errors.destinationCountryError = 'please pick a destination country'
      formIsValid = false;
    }

    this.setState({ errors: errors, weight: resetWeight && weight })
    return formIsValid;
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    if (this.formIsValid()) {
      this.setState({ errors: {}, disabled: true, ...initialState })

      setTimeout(() => {
        this.setState({ disabled: false })
      }, 2000);
    }
    // Trigger async action and send in data as payload
  }

  handleOnChange = (e, propName) => {
    let value = e.target.value;
    this.setState({ [propName]: value })
  }

  render() {
    return (
      <BoxCalculator
        onChangeHandler={this.handleOnChange}
        onSubmit={this.handleFormSubmit}
        countries={DestinationCountries}
        header="Calculate costs for shipping boxes"
        {...this.state}
      />
    );
  }
}

export default BoxCalculatorContainer;