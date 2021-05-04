import React, { useEffect, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './NavBar.js';
import ChatList from '../chatList/ChatList.js';
import FriendsList from '../friendList/FriendsList.js';
import Friends from '../data/Friends.json';
import Chats from '../data/Chats.json';
import Settings from '../setting/Settings.js';

const GlobalStyle = createGlobalStyle`
  display: flex;
  body {
    margin: 0;
  }
`;

const ChatAppContainer = styled.div`
  display: flex;
  width: 600px;
  height: 100vh;
  margin: auto;
  box-shadow: 5px 5px 20px 3px rgba(0, 0, 0, 0.25);
`;

function ChatApp() {
  useEffect(() => {
    localStorage.setItem('ChatList', JSON.stringify(Chats));
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <ChatAppContainer>
        <Router>
          <Route
            exact
            path={['/', '/chatlist', '/settings']}
            component={NavBar}
          />

          <Switch>
            <Route exact path="/">
              <FriendsList friends={Friends} />
            </Route>
            <Route path="/chatlist">
              <ChatList friends={Friends} key={Date.now()} />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </Router>
      </ChatAppContainer>
    </Fragment>
  );
}

export default ChatApp;
