import React from 'react';

function Message(props) {
  const { messageSender, messageContent } = props;

  return (
    <div>
      {messageSender.name}: {messageContent}
    </div>
  );
}

export default Message;
