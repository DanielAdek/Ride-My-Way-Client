import React, { Component } from 'react';
import Header from '../../containers/Header';
import Button from '../../components/Button';

import classes from './style.scss';

class Home extends Component {
    state = {

    }

    render() {
      const styleBtn = {
        // margin: 'auto',
        width: '200px'
      };
      return (
        <div className={classes.MainContainer}>
          <Header />
          <div className={classes.GetStartedSection}>
            <h1>Tap A Button, Ride My Way</h1>
            <Button styleButton={styleBtn}>GET STARTED</Button>
          </div>
        </div>
      );
    }
}

export default Home;
