import React, { Fragment, useState, useEffect } from 'react';
import App from '../chatRoom/App.js';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import ChattingList from '../data/Chats.json';

function ChatList(props) {
  const chatroomOnLocalstorage = JSON.parse(localStorage.getItem('ChatList'));

  const [currentChattingRoom, setCurrentChattingRoom] = useState(
    chatroomOnLocalstorage.map((item) => {
      return (
        <Link to={`/chatlist/${item.friendId}`}>
          <div>{props.friends[item.friendId - 1].name}</div>
          <div>{item.chats[item.chats.length - 1].message}</div>
        </Link>
      );
    })
  );

  const handleChatListChange = (chatList) => {
    setCurrentChattingRoom(
      chatList.map((item) => {
        return (
          <Link to={`/chatlist/${item.friendId}`}>
            <div>{props.friends[item.friendId - 1].name}</div>
            <div>{item.chats[item.chats.length - 1].message}</div>
          </Link>
        );
      })
    );
  };

  return (
    <Fragment key={props.key}>
      <Route exact path="/chatlist">
        {currentChattingRoom}
      </Route>
      <Route
        exact
        path="/chatlist/:friendId"
        render={() => (
          <App
            chatList={chatroomOnLocalstorage}
            onChatListChange={handleChatListChange}
          />
        )}
      />
    </Fragment>
  );
}

export default ChatList;
