import React, { Component } from 'react';
import BoxCalculator from '../../components/BoxCalculatorForm';
import { DestinationCountries } from '../../_config/common';
import { connect } from 'react-redux';
import { saveBox } from '../../redux/Actions/app';
import Loader from '../../components/Loader';
import Notification from '../../components/Notification';

import './style.scss';

const VALUES = {
  // Text field - name
  MINLENGTH: "5",
  MAXLENGTH: "15",

  // Number field - weight
  MIN: "0",
  MAX: "100"
}

const initialState = {
  name: null,
  weight: null,
  box_color: '#000000',
  destination_country: DestinationCountries[0].value, // Default selected country
}

class BoxCalculatorContainer extends Component {

  constructor(props) {
    super(props)

    this.time = null;

    this.state = {
      ...initialState,
      errors: {},
      disabled: false,
    };
  }

  colorValidation = () => {
    // do color validation disabling all blue colors
  }

  formIsValid = () => {
    const { name, weight, destination_country } = this.state;

    let errors = {};
    let formIsValid = true;
    let resetWeight = false;

    // Name validation
    if (name.length > VALUES.MAXLENGTH) {
      errors.nameError = { message: `Name has to be less than ${VALUES.MAXLENGTH} characters`, code: 'aboveMaxError' }
      formIsValid = false;
    } else if (name.length < VALUES.MINLENGTH) {
      errors.nameError = { message: `Name can't be below ${VALUES.MINLENGTH} characters`, code: 'belowMinError' }
      formIsValid = false;
    }

    // Weight validation
    let numWeight = Number(weight);
    if (numWeight < VALUES.MIN) {
      errors.weightError = { message: 'Negative values are not permitted, please enter a valid weight', code: 'negativeValError' }
      formIsValid = false;
      resetWeight = true;
    } else if (numWeight > VALUES.MAX) {
      errors.weightError = {message: `Box can't weight more than ${VALUES.MAX} kg`, code: 'aboveMaxError'}
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
    const { name, weight, box_color, destination_country } = this.state;

    const data = {
      name,
      weight: Number(weight),
      color: box_color,
      destinationCountry: destination_country
    };

    if (this.formIsValid()) {
      this.props.saveBox(data)

      this.setState({ errors: {}, disabled: true, ...initialState })

      this.time = setTimeout(() => {
        this.setState({ disabled: false })
      }, 2000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.time);
  }

  handleOnChange = (e, propName) => {
    let value = e.target.value;
    this.setState({ [propName]: value })
  }

  render() {
    const { isLoading } = this.props;
    if (isLoading) {
      return <Loader />
    }

    if (!isLoading && !this.state.errors) {
      return <Notification />
    }

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

export default connect(
  state => ({
    isLoading: state.isLoading
  }),
  dispatch => ({
    saveBox: payload => dispatch(saveBox(payload))
  }))(BoxCalculatorContainer);