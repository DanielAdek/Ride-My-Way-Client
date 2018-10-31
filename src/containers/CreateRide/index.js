import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createRideOffer } from '../../store/actions/rideAction';
import Button from '../../components/Button';
import Input from '../../components/InputField';
import validationResponse from '../../utils/validateForm';

import classes from './style.scss';

export class CreateRide extends Component {
    state = {
      ride: {
        departure: '',
        destination: '',
        time: '',
        date: '',
        seats: 0,
        slots: 0,
        cost: 0,
        message: ''
      }
    }

    handleChangeEvent = (event) => {
      const { ride } = this.state;
      this.setState({
        ride: {
          ...ride,
          [event.target.name]: event.target.value
        }
      });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      const { ride } = this.state;
      const { createRideAction } = this.props;

      const rideDetails = { ...ride };

      //   const inValidFormDetails = validationResponse(rideDetails);
      //   if (inValidFormDetails.formIsValid) {
      createRideAction(rideDetails);
    //   } else {
      // Object.values(inValidFormDetails.errors).forEach((error) => {
      //   toastr.error(`${error}`);
      // });
    //   }
    }

    render() {
      const { ride } = this.state;
      const { loading } = this.props;
      return (
        <section className="main-container">
          <div className="wrapper grid-row-1">
            <div className="card p-3 add-ride-form">
              <div className="flex-row justify-content-center text-success message" />
              <div className="flex-row justify-content-center text-danger error" />
              <form className="form-ride">
                <div className="first flex-column">
                  <label htmlFor="from" className="p-4">
                    Departure
                    <span>*</span>
                  </label>
                  <input
                    className="p-5"
                    type="text"
                    name="departure"
                    id="departure"
                    placeholder="Start location"
                    value={ride.departure}
                    onChange={this.handleChangeEvent}
                    required
                  />
                  <label htmlFor="to" className="p-4">
                    Destination
                    <span>*</span>
                  </label>
                  <input
                    className="p-5"
                    type="text"
                    value={ride.destination}
                    name="destination"
                    id="destination"
                    placeholder="Stop location"

                    onChange={this.handleChangeEvent}
                    required
                  />

                  <label htmlFor="time" className="p-4">
                    Time
                    <span>*</span>
                  </label>
                  <input
                    onChange={this.handleChangeEvent}
                    value={ride.time}
                    className="p-5"
                    type="time"
                    name="time"
                    id="time"
                    required
                  />

                  <label htmlFor="date" className="p-4">
                    Date
                    <span>*</span>
                  </label>
                  <input
                    onChange={this.handleChangeEvent}
                    value={ride.date}
                    className="p-5"
                    type="date"
                    name="date"
                    id="date"
                    required
                  />
                </div>

                <div className="second flex-column">
                  <label htmlFor="slots" className="p-4">
                    slots
                    <span>*</span>
                  </label>
                  <input
                    onChange={this.handleChangeEvent}
                    value={ride.slots}
                    className="p-5"
                    type="number"
                    name="slots"
                    id="slots"
                    required
                  />

                  <label htmlFor="cost" className="p-4">
                    cost
                    <span>*</span>
                  </label>
                  <input
                    onChange={this.handleChangeEvent}
                    value={ride.cost}
                    className="p-5"
                    type="number"
                    name="cost"
                    id="cost"
                    required
                  />
                  <div className="message mb-4">
                    <div className="mb-4">Message</div>
                    <textarea
                      onChange={this.handleChangeEvent}
                      className="p-4 block-xl"
                      name="message"
                      id="msg"
                      cols="20"
                      value={ride.message}
                      placeholder="What will you like to tell your passangers?"
                      rows="5"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-blue share-ride-btn"
                    id="create-ride-btn"
                    onClick={this.handleSubmit}
                  >
                    Share Ride
                  </button>
                </div>

              </form>
            </div>
            <div className="show-map grid-col-lg">
              <div id="map" />
            </div>
          </div>
        </section>
      );
    }
}

const mapStateToProps = state => ({
  loading: state.authUser.loading
});

const mapDispatchToProps = dispatch => ({
  createRideAction: rideDetails => (dispatch(createRideOffer(rideDetails)))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateRide);
