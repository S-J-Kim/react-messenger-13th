import React, { useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './base/NavBar.js';
import ChatList from './chatList/ChatList.js';
import FriendsList from './friendList/FriendsList.js';
import Friends from './data/Friends.json';
import Chats from './data/Chats.json';

function ChatApp() {
  useEffect(() => {
    localStorage.setItem('ChatList', JSON.stringify(Chats));
  }, []);

  return (
    <Router>
      <Route exact path={['/', '/chatlist', '/settings']} component={NavBar} />

      <Switch>
        <Route exact path="/">
          <FriendsList friends={Friends} />
        </Route>
        <Route path="/chatlist">
          <ChatList friends={Friends} key={Date.now()} />
        </Route>
        <Route path="/settings" />
      </Switch>
    </Router>
  );
}

export default ChatApp;
