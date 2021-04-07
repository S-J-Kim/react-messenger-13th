import React, { Fragment } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

function NavBar() {
  return (
    <Fragment>
      <Link to="/">Friends</Link>
      <Link to="/chatlist">Chats</Link>
      <Link to="/settings">Settings</Link>
    </Fragment>
  );
}

export default NavBar;
