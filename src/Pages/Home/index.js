import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../containers/Header';
import Button from '../../components/Button';

import classes from './style.scss';

class Home extends Component {
    state = {

    }

    render() {
      const styleBtn = {
        width: '200px'
      };
      return (
        <div className={classes.MainContainer}>
          <Header />
          <div className={classes.GetStartedSection}>
            <h1>Tap A Button, Ride My Way</h1>
            <Link to="/signup">
              <Button styleButton={styleBtn}>GET STARTED</Button>
            </Link>
          </div>
        </div>
      );
    }
}

export default Home;
