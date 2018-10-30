import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createAccount } from '../../store/actions/authUserAction';
import Button from '../../components/Button';
import Input from '../../components/InputField';
import validationResponse from '../../utils/validateForm';
import classes from './style.scss';

class SignupForm extends Component {
  state = {
    user: {
      fullName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    showPassword: false
  }

  handleChangeEvent = (event) => {
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [event.target.name]: event.target.value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const { RegisterUser, history } = this.props;

    const userDetails = { ...user };

    const inValidFormDetails = validationResponse(userDetails);
    if (inValidFormDetails.formIsValid) {
      RegisterUser(userDetails, history);
    } else {
      Object.values(inValidFormDetails.errors).forEach((error) => {
        toastr.error(`${error}`);
      });
    }
  }

  handleShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  }

  render() {
    const styleButton = {
      background: 'transparent',
      color: 'blue',
      cursor: 'pointer',
      fontSize: '.8rem',
      border: 'none'
    };
    const signupButton = {
      padding: '.7rem',
      width: '30%',
    };
    const { user, showPassword } = this.state;
    const { loading } = this.props;
    return (
      <form className={classes.FormGroup}>
        <Input
          labelTextContent="Full Name"
          type="text"
          onChange={this.handleChangeEvent}
          value={user.fullName}
          name="fullName"
          className={`form-control ${classes.Input}`}
        />
        <br />
        <Input
          labelTextContent="Username"
          type="text"
          onChange={this.handleChangeEvent}
          value={user.username}
          name="username"
          className={`form-control ${classes.Input}`}
        />
        <br />
        <Input
          labelTextContent="Email"
          type="email"
          onChange={this.handleChangeEvent}
          value={user.email}
          name="email"
          className={`form-control ${classes.Input}`}
        />
        <br />
        <Input
          labelTextContent="Password"
          type={showPassword ? 'text' : 'password'}
          onChange={this.handleChangeEvent}
          value={user.password}
          name="password"
          className={`form-control ${classes.Input}`}
        />
        <br />
        <Input
          labelTextContent="Confirm Password"
          type={showPassword ? 'text' : 'password'}
          onChange={this.handleChangeEvent}
          value={user.confirmPassword}
          name="confirmPassword"
          className={`form-control ${classes.Input}`}
        />
        <Button click={this.handleShowPassword} styleButton={styleButton}>
          {showPassword ? 'Hide Password' : 'Show Password'}
        </Button>
        <Button click={event => this.handleSubmit(event)} styleButton={signupButton} disabled={loading}>
            Sign up
          <i className={`${loading ? 'fas fa-spinner fa-spin' : ''} ${classes.Spin}`} />
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.authUser.loading,
});

const mapDispatchToProps = dispatch => ({
  RegisterUser: (userData, history) => (dispatch(createAccount(userData, history)))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupForm));
