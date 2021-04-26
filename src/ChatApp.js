import React, { Fragment } from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './base/NavBar.js';
import ChatList from './chatList/ChatList.js';
import FriendsList from './friendList/FriendsList.js';
import Friends from './data/Friends.json';

function ChatApp() {
  return (
    <Router>
      <Route exact path={['/', '/chatlist', '/settings']} component={NavBar} />

      <Switch>
        <Route exact path="/">
          <FriendsList friends={Friends} />
        </Route>
        <Route path="/chatlist" component={ChatList}>
          <ChatList friends={Friends} />
        </Route>
        <Route path="/settings" />
      </Switch>
    </Router>
  );
}

export default ChatApp;
