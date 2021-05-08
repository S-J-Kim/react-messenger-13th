import React, { Fragment, useState } from 'react';
import Chatroom from '../chatRoom/Chatroom.js';
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

function ChatList(props) {
  // localStorage에 있는 chatting 목록을 불러온다음, state로 선언
  const chatroomOnLocalstorage = JSON.parse(localStorage.getItem('ChatList'));
  const [searchQuery, setSearchQuery] = useState('');

  const [currentChattingRoom, setCurrentChattingRoom] = useState(
    // Chats.json은 대화 상대방의 id만 가지고 있기 때문에,
    // Friends.json에서 프로필 이미지를 가져온다.
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

  // 채팅방에서 채팅을 주고받았으면, 채팅방 목록에 마지막 메세지 미리보기가 갱신되어야 한다.
  // 채팅방 목록을 Chatroom 컴포넌트 (특정 채팅방)에 props로 주어서 채팅 내용이 갱신될 때 마다
  // state를 업데이트해서 채팅방 목록에서도 미리보기가 갱신될 수 있도록 한다.

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

  // searchQuery에 의해 필터링된 리스트를 채팅 목록 컨테이너로 던진다.
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
          <Chatroom
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
