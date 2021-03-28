import React from 'react';
import styled from 'styled-components';

const MessageItem = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.messageSender.id === 0 ? 'row' : 'row-reverse'};
  align-content: flex-start;
`;

const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
`;

const MessageBox = styled.span`
  padding: 5px;
  border-radius: 25%;
  background-color: ${(props) =>
    props.messageSender.id === 0 ? 'white' : 'bisque'};
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

// const Message = React.forwardRef((props, ref) => {
//   const { messageSender, messageContent } = props;
//   return (
//     <div ref={ref}>
//       {messageSender.name} : {messageContent}
//     </div>
//   );
// });

export default Message;
