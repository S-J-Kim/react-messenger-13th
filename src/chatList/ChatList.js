import React, { Fragment } from 'react';
import App from '../chatRoom/App.js';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import FriendsList from '../friendList/FriendsList.js';

function ChatList() {
  return (
    <Fragment>
      <Route
        exact
        path="/chatlist"
        render={() => (
          <div>
            ChatList <Link to="/chatlist/detail">Chat</Link>
          </div>
        )}
      />
      <Route exact path="/chatlist/detail" component={App}></Route>
    </Fragment>
  );
}

export default ChatList;
