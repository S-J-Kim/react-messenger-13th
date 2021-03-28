import React, { useState, Fragment } from 'react';

import MessageForm from './form.js';
import Header from './header.js';
import Message from './message.js';


function App() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const user = {
    y: 'you',
    m: 'me'
  }
  const [currentSendingUser, setCurrentSendingUser] = useState(user.m);
  const handleCurrentMessageInputChange = (event) => {
    setCurrentMessage(event.target.value)
  }

  const handleSendMessage = (event) => {
    event.preventDefault()
    console.log(event.target);

    const newMessage = <Message
      messageContent={currentMessage}
      messageSender={currentSendingUser}
    />
    setCurrentMessage("");
    setMessages([...messages, newMessage])
  }

  const handleHeaderClick = (event) => {
    if (currentSendingUser === user.m) {
      setCurrentSendingUser(user.y);
    }

    else {setCurrentSendingUser(user.m)}
  }



  return (
    <Fragment>
        <Header
          onHeaderClick={handleHeaderClick}
          currentUser={currentSendingUser}
          />
        <MessageForm
          currentUser={currentSendingUser}
          currentMessage={currentMessage}
          onCurrentMessageInputChange={handleCurrentMessageInputChange}
          onSendMessage={handleSendMessage}
          />
        <div>{messages}</div>
    </Fragment>
  );
}

export default App;
