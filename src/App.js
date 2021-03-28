import React, { useState, Fragment } from 'react';
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
  margin: 0 auto;
`;

const MessageContainer = styled.div`
  height: 100px;
  overflow: scroll;
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
  const handleCurrentMessageInputChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    console.log(event.target);

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

  return (
    <Fragment>
      <GlobalStyle />
      <MessengerContainer>
        <Header
          onHeaderClick={handleHeaderClick}
          currentUser={currentSendingUser}
        />
        <MessageContainer>{messages}</MessageContainer>
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
