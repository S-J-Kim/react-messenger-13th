import React, { Fragment } from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './base/NavBar.js';
import ChatList from './chatList/ChatList.js';
import FriendsList from './friendList/FriendsList.js';

function ChatApp() {
  return (
    <Router>
      <Route
        exact
        path={['/', '/chatlist', '/settings']}
        component={NavBar}
      ></Route>

      <Switch>
        <Route exact path="/" component={FriendsList}></Route>
        <Route path="/chatlist" component={ChatList} />
        <Route path="/settings" />
      </Switch>
    </Router>
  );
}

export default ChatApp;
