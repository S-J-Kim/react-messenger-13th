import React, { Fragment, useState } from 'react';
import App from '../chatRoom/App.js';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';
import SearchBar from '../base/SearchBar.js';

const StyledHeader = styled.div`
  font-size: 25px;
  font-weight: bolder;
  background-color: rgba(33, 33, 33, 0.35);
  padding: 20px;
  color: whitesmoke;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgba(33, 33, 33, 0.05);
`;

const ChatListContainer = styled.div`
  background-color: rgba(33, 33, 33, 0.05);
  padding: 10px;
  height: 100%;
`;

function ChatList(props) {
  const chatroomOnLocalstorage = JSON.parse(localStorage.getItem('ChatList'));
  const [searchQuery, setSearchQuery] = useState('');

  const [currentChattingRoom, setCurrentChattingRoom] = useState(
    chatroomOnLocalstorage.map((item) => {
      const profileImage = props.friends.find((elem) => {
        return elem.id === item.friendId;
      }).profileImage;

      return {
        id: item.friendId,
        name: props.friends[item.friendId - 1].name,
        lastMessage: item.chats[item.chats.length - 1].message,
        profileImage: profileImage,
      };
    })
  );

  const handleChatListChange = (chatList) => {
    setCurrentChattingRoom(
      chatList.map((item) => {
        const profileImage = props.friends.find((elem) => {
          return elem.id === item.friendId;
        }).profileImage;

        return {
          id: item.friendId,
          name: props.friends[item.friendId - 1].name,
          lastMessage: item.chats[item.chats.length - 1].message,
          profileImage: profileImage,
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
        <StyledContainer>
          <StyledHeader>Chats</StyledHeader>
          <SearchBar onInputChange={handleSearchQueryChange} />
          <ChatListContainer>
            <FilteredChatList filteredList={filteredChatList} />
          </ChatListContainer>
        </StyledContainer>
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

const SingleChatItem = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  border-radius: 15px;

  &:hover {
    background-color: rgba(33, 33, 33, 0.05);
  }
`;

const ChatItemProfileImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 25%;
  object-fit: cover;
  margin: 15px;
`;

const ChatItemInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 15px;
  box-sizing: border-box;
`;

const FriendName = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: black;
  text-decoration: none;
`;

const ChatLastMsg = styled.div`
  font-size: 14px;
  font-weight: medium;
  color: rgb(55, 55, 55);
  text-decoration: none;
  margin-top: 10px;
`;

const FilteredChatList = (props) => {
  return props.filteredList.map((item) => {
    return (
      <Link to={`/chatlist/${item.id}`} style={{ textDecoration: 'none' }}>
        <SingleChatItem>
          <ChatItemProfileImage
            src={process.env.PUBLIC_URL + '/images/' + item.profileImage}
          />
          <ChatItemInfo>
            <FriendName>{item.name}</FriendName>
            <ChatLastMsg>{item.lastMessage}</ChatLastMsg>
          </ChatItemInfo>
        </SingleChatItem>
      </Link>
    );
  });
};

export default ChatList;
