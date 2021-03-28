import React from 'react'

function Message(props) {
    const { messageSender, messageContent } = props;

    return (
        <div>{messageSender}:  {messageContent}</div>
    )
}

export default Message;