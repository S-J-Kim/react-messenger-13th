import React from 'react';
import styled from 'styled-components';

const MessageSendingForm = styled.form`
  width: 100%;
  height: 50px;
  display: flex !important;
  align-content: center !important;
  justify-content: space-around;
  padding: 10px 0;
`;

const MessageInputBox = styled.input`
  width: 85%;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
  font-size: 15px;
  background-color: rgba(0, 0, 0, 0);

  &:focus {
    outline: none;
  }
`;

const MessageSendingButton = styled.button`
  background-color: white;
  width: 10%;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  background-color: blue;
  color: white;
  margin-right: 10px;
`;

function MessageForm(props) {
  const { currentMessage, onCurrentMessageInputChange, onSendMessage } = props;

  return (
    <MessageSendingForm onSubmit={onSendMessage}>
      <MessageInputBox
        type="text"
        value={currentMessage}
        placeholder="메세지 입력"
        onChange={onCurrentMessageInputChange}
      />
      <MessageSendingButton type="submit">전송</MessageSendingButton>
    </MessageSendingForm>
  );
}

export default MessageForm;
