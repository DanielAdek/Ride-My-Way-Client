import React from 'react';

import NavBar from '../../../components/NavBar';
import Navlink from '../../../components/NavBar/Links';
import Logo from '../../../components/Logo';

import classes from '../style.scss';


const Header = (props) => {
  const userName = JSON.parse(localStorage.getItem('user'));
  return (
    <div className={classes.Header}>
      <Logo />
      <NavBar>
        <Navlink url="/create-ride" linkText="Create Ride" />
        <a className="list-group-item pl-4 dropdown-li" style={{ color: 'white' }} title={userName.email}>
          {userName.username}
          <i className="fas fa-caret-down text-white" />
          <div className="dropdown">
            <ul className="list-group-items p-3 flex-column">
              <li className="list-group-item">Edit Profile</li>
              <li className="list-group-item">Notifications</li>
              <li className="list-group-item" id="logout">
                <i className="fas fa-power-off" />
                <button onClick={props.handleLogout}>Log out</button>
              </li>
            </ul>
          </div>
        </a>
        <Navlink url="/request" linkText="Requests" />
        <Navlink url="/all-rides" linkText="Available Rides" />
      </NavBar>
    </div>
  );
};

export default Header;
