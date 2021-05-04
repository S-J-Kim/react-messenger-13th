import React from 'react';
import ReactDOM from 'react-dom';
import App from './chatRoom/App';
import FriendsList from './friendList/FriendsList.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ChatApp from './base/ChatApp';

ReactDOM.render(
  <React.StrictMode>
    <ChatApp></ChatApp>
  </React.StrictMode>,
  document.getElementById('root')
);
