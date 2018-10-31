import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../containers/Header/AuthUserHeader';
import Footer from '../../containers/Footer';
import StartRide from '../../containers/CreateRide';
import classes from './style.scss';

class CreateRide extends Component {
  handleLogout =() => {
    const { history } = this.props;
    history.push('/');
    localStorage.removeItem('user');
  }

  render() {
    return (
      <div className={classes.Container}>
        <Header handleLogout={this.handleLogout} />
        <StartRide />
        <Footer />
      </div>
    );
  }
}


export default withRouter(CreateRide);
