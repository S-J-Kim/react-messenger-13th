import React from 'react';
import styled from 'styled-components';

const MessageItem = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.messageSender.id === 0
      ? 'row-reverse'
      : 'row'}; // sender에 따라 메세지 박스의 위치 다르게 하기 위함.
  align-content: flex-start;
  margin: 10px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
`;

const MessageBox = styled.span`
  padding: 10px;
  margin: 0 10px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.messageSender.id !== 0 ? 'white' : 'bisque'};
  word-break: break-all;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
`;

function Message(props) {
  const { messageSender, messageContent } = props;

  return (
    <MessageItem {...props}>
      <ProfileImage src={messageSender.profileImage} />
      <MessageBox {...props}>{messageContent}</MessageBox>
    </MessageItem>
  );
}

export default Message;
