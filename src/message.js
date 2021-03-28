import React from 'react';

function Message(props) {
  const { messageSender, messageContent } = props;

  return (
    <div>
      {messageSender.name}: {messageContent}
    </div>
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
