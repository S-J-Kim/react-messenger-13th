import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../base/SearchBar';

function FriendsList(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [friendList, setFriendList] = useState(
    props.friends.map((item) => {
      const friendItem = {
        id: item.id,
        name: item.name,
      };

      return friendItem;
    })
  );

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredList = friendList.filter((item) => {
    return item.name.indexOf(searchQuery) > -1;
  });

  return (
    <div>
      <SearchBar onInputChange={handleSearchQueryChange} />
      <FilteredFriendList filteredList={filteredList} />
    </div>
  );
}

const FilteredFriendList = (props) => {
  return props.filteredList.map((item) => {
    return (
      <Link to={`/chatlist/${item.id}`}>
        <div>{item.id}</div>
        <div>{item.name}</div>
      </Link>
    );
  });
};

export default FriendsList;
