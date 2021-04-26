import React, { useState, Fragment, useRef, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MessageForm from './form.js';
import Header from './header.js';
import Message from './message.js';
import FriendList from '../data/Friends.json';
import ChatList from '../data/Chats.json';

const GlobalStyle = createGlobalStyle`
  display: flex;
  body {
    margin: 0;
  }
`;

const MessengerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: auto;
  box-shadow: 5px 5px 20px 3px rgba(0, 0, 0, 0.25);
`;

const MessageContainer = styled.div`
  height: calc(95vh - 170px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding: 10px;
  background-color: rgba(33, 33, 33, 0.05);
`;

function App(props) {
  const friendId = props.match.params.friendId;
  const currentFriend = FriendList.find((item) => {
    return item.id === parseInt(friendId);
  });
  const currentChatList = ChatList.find((item) => {
    return item.friendId === parseInt(friendId);
  });

  const user = {
    you: {
      id: currentFriend.id,
      name: currentFriend.name,
      profileImage:
        process.env.PUBLIC_URL + '/images/' + currentFriend.profileImage,
    },
    me: {
      id: 0,
      name: 'Seon-Jong Kim',
      profileImage: process.env.PUBLIC_URL + '/images/sj.png',
    },
  };

  const previousChatList = currentChatList.chats.map((item) => {
    return (
      <Message
        messageContent={item.message}
        messageSender={item.senderId === 0 ? user.me : user.you}
      />
    );
  });

  const [currentMessage, setCurrentMessage] = useState('');
  const [messages, setMessages] = useState(previousChatList);

  const [currentSendingUser, setCurrentSendingUser] = useState(user.me);
  const messageContainerRef = useRef(); // Message Container 영역을 가르키기 위해 useRef() 사용

  const handleCurrentMessageInputChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();

    // 메세지 내용 없이 전송하려 하면 alert
    if (currentMessage === '') {
      alert('메시지를 입력하세요!');
      return;
    }

    const newMessage = (
      <Message
        messageContent={currentMessage}
        messageSender={currentSendingUser}
      />
    );
    setCurrentMessage(''); // input form을 비운다.
    setMessages([...messages, newMessage]);
  };

  const handleHeaderClick = () => {
    console.log(currentChatList.chats);

    if (currentSendingUser.id === 0) {
      setCurrentSendingUser(user.you);
    } else {
      setCurrentSendingUser(user.me);
    }
  };

  useEffect(() => {
    messageContainerRef.current.scrollBy(0, 1000);
  }, [messages]);

  return (
    <Fragment>
      <GlobalStyle />
      <MessengerContainer>
        <Header
          onHeaderClick={handleHeaderClick}
          currentUser={currentSendingUser}
        />

        <MessageContainer ref={messageContainerRef}>
          {messages}
        </MessageContainer>

        <MessageForm
          currentMessage={currentMessage}
          onCurrentMessageInputChange={handleCurrentMessageInputChange}
          onSendMessage={handleSendMessage}
        />
      </MessengerContainer>
    </Fragment>
  );
}

export default App;
