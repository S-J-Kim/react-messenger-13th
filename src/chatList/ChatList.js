import React, { Fragment, useState, useEffect } from 'react';
import App from '../chatRoom/App.js';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';
import ChattingList from '../data/Chats.json';
import SearchBar from '../base/SearchBar.js';

function ChatList(props) {
  const chatroomOnLocalstorage = JSON.parse(localStorage.getItem('ChatList'));
  const [searchQuery, setSearchQuery] = useState('');

  const [currentChattingRoom, setCurrentChattingRoom] = useState(
    chatroomOnLocalstorage.map((item) => {
      return {
        id: item.friendId,
        name: props.friends[item.friendId - 1].name,
        lastMessage: item.chats[item.chats.length - 1].message,
      };
    })
  );

  const handleChatListChange = (chatList) => {
    setCurrentChattingRoom(
      chatList.map((item) => {
        return {
          id: item.friendId,
          name: props.friends[item.friendId - 1].name,
          lastMessage: item.chats[item.chats.length - 1].message,
        };
      })
    );
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredChatList = currentChattingRoom.filter((item) => {
    return item.name.indexOf(searchQuery) > -1;
  });

  return (
    <Fragment key={props.key}>
      <Route exact path="/chatlist">
        <SearchBar onInputChange={handleSearchQueryChange} />
        <FilteredChatList filteredList={filteredChatList} />
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

const FilteredChatList = (props) => {
  return props.filteredList.map((item) => {
    return (
      <Link to={`/chatlist/${item.id}`}>
        <div>{item.name}</div>
        <div>{item.lastMessage}</div>
      </Link>
    );
  });
};

export default ChatList;
