import React, { Component } from 'react';
import BoxCalculator from '../../components/BoxCalculatorForm';
import { DestinationCountries } from '../../_config/common';
import { connect } from 'react-redux';
import { saveBox } from '../../redux/Actions/app';
import Loader from '../../components/Loader';

import './style.scss';

const VALUES = {
  // Text field - name
  MINLENGTH: "5",
  MAXLENGTH: "15",

  // Number field - weight
  MIN: "0",
  MAX: "100"
}

// Random colors
const red = Math.floor(Math.random() * 255)
const green = Math.floor(Math.random() * 255)
const blue = Math.floor(Math.random() * 255)

const initialState = {
  name: null,
  weight: null,
  box_color: `rgb(${red}, ${green}, ${blue})`,
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
      showNotification: false,
    };
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
      errors.weightError = { message: `Box can't weight more than ${VALUES.MAX} kg`, code: 'aboveMaxError' }
      formIsValid = false;
    }

    // Destination error
    if (destination_country.length < 1) {
      errors.destinationCountryError = { message: 'please pick a destination country', code: 'noValueError' }
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

      this.setState({ errors: {}, disabled: true, ...initialState, showNotification: true })

      this.time = setTimeout(() => {
        this.setState({ disabled: false, showNotification: false })
      }, 3000);
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

    return (
      <BoxCalculator
        onChangeHandler={this.handleOnChange}
        onSubmit={this.handleFormSubmit}
        countries={DestinationCountries}
        header="Calculate costs for shipping boxes"
        {...this.state}
        showNotification={this.state.showNotification}
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