import React, { useState, Fragment, useRef, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MessageForm from './form.js';
import Header from './header.js';
import Message from './message.js';

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
`;

const MessageContainer = styled.div`
  height: 100px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;

function App() {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const user = {
    you: {
      id: 0,
      name: 'Elon Musk',
      profileImage: process.env.PUBLIC_URL + 'images/musk.jpeg',
    },
    me: {
      id: 1,
      name: 'Seon-Jong Kim',
      profileImage: process.env.PUBLIC_URL + 'images/sj.png',
    },
  };
  const [currentSendingUser, setCurrentSendingUser] = useState(user.me);
  const messageContainerRef = useRef();

  const handleCurrentMessageInputChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();

    const newMessage = (
      <Message
        messageContent={currentMessage}
        messageSender={currentSendingUser}
      />
    );
    setCurrentMessage('');
    setMessages([...messages, newMessage]);
  };

  const handleHeaderClick = () => {
    if (currentSendingUser.id === 1) {
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
          currentUser={currentSendingUser}
          currentMessage={currentMessage}
          onCurrentMessageInputChange={handleCurrentMessageInputChange}
          onSendMessage={handleSendMessage}
        />
      </MessengerContainer>
    </Fragment>
  );
}

export default App;
