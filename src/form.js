import React, { useState } from 'react';

function MessageForm(props) {
    const { currentMessage, onCurrentMessageInputChange, onSendMessage } = props;

    return (
        <form onSubmit={onSendMessage}>
            <input
                type='text'
                value={currentMessage}
                placeholder='메세지 입력'
                onChange={onCurrentMessageInputChange}
            />
            <button type="submit">submit</button>
        </form>
    )
}

export default MessageForm;