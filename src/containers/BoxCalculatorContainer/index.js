import React, { Component } from 'react';
import BoxCalculator from '../../components/BoxCalculatorForm';
import { DestinationCountries } from '../../_config/common';

import { throttle } from '../../_utils/throttle';

import './style.scss';

const VALUES = {
  // Text - name
  MINLENGTH: "5",
  MAXLENGTH: "15",

  // Number - weight
  MIN: "1",
  MAX: "5"
}

class BoxCalculatorContainer extends Component {

  state = {
    name: null,
    weight: null,
    box_color: null,
    destination_country: DestinationCountries[0].value, // Default selected country

    // Validation state
    errors: {},
    disabledButton: true,
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('submit form', this.state)
    // Trigger async action and send in data as payload
  }

  handleOnChange = (e, propName) => {
    let value = e.target.value;

    this.setState(() => ({ [propName]: value }),
      () => {
        const { name, weight } = this.state;

        // Rules
        let nameRules = name && name.length < VALUES.MINLENGTH;
        let weightRuleBelowMin = weight && weight > -1 && this.state.weight < VALUES.MIN;
        let weightRuleMinus = weight && weight < 0;

        let errors = [];

        if ((name && name.length !== 0) || weight) {
          if (nameRules) {
            errors.push({ nameError: `Name needs to be at least ${VALUES.MINLENGTH} characters long` })
          }
          if (weightRuleBelowMin) {
            errors.push({ weightError: `Box needs to weight at least ${VALUES.MIN} kg` })
          }
          if (weightRuleMinus) {
            errors.push({ weightError: `Negative values are not permitted` })
          }

          // Handle button enable/disable without throttle
          if (errors.length === 0) {
            this.setState({ disabledButton: false })
          } else {
            this.setState({ disabledButton: true })
          }

          // Throttle the error output to the user
          throttle(() => {
            this.setState(() => ({
              errors: errors
            }))
          }, 1000)
        }
      });
  }

  componentWillUnmount() {
    clearTimeout();
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