import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../store/actions/authUserAction';
import Button from '../../components/Button';
import Input from '../../components/InputField';
import validationResponse from '../../utils/validateLoginForm';
import classes from './style.scss';

class LoginForm extends Component {
  state = {
    user: {
      email: '',
      password: ''
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
    const { loginUserAction, history } = this.props;

    const userDetails = { ...user };

    const inValidFormDetails = validationResponse(userDetails);
    if (inValidFormDetails.formIsValid) {
      loginUserAction(userDetails, history);
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
        <Button click={this.handleShowPassword} styleButton={styleButton}>
          {showPassword ? 'Hide Password' : 'Show Password'}
        </Button>
        <Button click={event => this.handleSubmit(event)} styleButton={signupButton} disabled={loading}>
            LOGIN
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
  loginUserAction: (userData, history) => (dispatch(loginUser(userData, history)))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
