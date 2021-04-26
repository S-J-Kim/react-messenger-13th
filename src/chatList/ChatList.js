import React, { Fragment } from 'react';
import App from '../chatRoom/App.js';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import ChattingList from '../data/Chats.json';

function ChatList(props) {
  const currentChattingRooms = ChattingList.map((item) => {
    return (
      <Link to={`/chatlist/${item.friendId}`}>
        <div>{props.friends[item.friendId - 1].name}</div>
        <div>{item.chats[item.chats.length - 1].message}</div>
      </Link>
    );
  });

  return (
    <Fragment>
      <Route exact path="/chatlist">
        {currentChattingRooms}
      </Route>
      <Route exact path="/chatlist/:friendId" component={App} />
    </Fragment>
  );
}

export default ChatList;
