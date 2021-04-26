import React, { Fragment } from 'react';

function FriendsList(props) {
  const friendList = props.friends.map((item, index) => {
    return (
      <Fragment>
        <div>{item.id}</div>
        <div>{item.name}</div>
      </Fragment>
    );
  });
  return <div>{friendList}</div>;
}

export default FriendsList;
