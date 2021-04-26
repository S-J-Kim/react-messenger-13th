import React, { Fragment } from 'react';
import FriendList from '../data/Friends.json';

function FriendsList() {
  const friendList = FriendList.friends.map((item, index) => {
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
