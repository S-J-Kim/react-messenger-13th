import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../base/SearchBar';
import styled from 'styled-components';

const StyledHeader = styled.div`
  font-size: 25px;
  font-weight: bolder;
  background-color: rgba(33, 33, 33, 0.35);
  padding: 20px;
  color: whitesmoke;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgba(33, 33, 33, 0.05);
`;

const FriendListContainer = styled.div`
  background-color: rgba(33, 33, 33, 0.05);
  padding: 10px;
  height: 100%;
`;

function FriendsList(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [friendList, setFriendList] = useState(props.friends);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchQueryReset = () => {
    setSearchQuery('');
  };

  const filteredList = friendList.filter((item) => {
    return item.name.indexOf(searchQuery) > -1;
  });

  return (
    <StyledContainer>
      <StyledHeader>Friends</StyledHeader>
      <SearchBar
        onInputChange={handleSearchQueryChange}
        onInputReset={handleSearchQueryReset}
        value={searchQuery}
      />
      <FriendListContainer>
        <FilteredFriendList filteredList={filteredList} />
      </FriendListContainer>
    </StyledContainer>
  );
}

const SingleFriendItem = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 15px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(33, 33, 33, 0.05);
  }
`;

const FriendItemProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25%;
  object-fit: cover;
  margin: 10px;
`;

const FriendItemProfileInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  box-sizing: border-box;
`;

const FriendName = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
`;

const FriendStatusMsg = styled.div`
  font-size: 11px;
  font-weight: medium;
  text-decoration: none;
`;

const FilteredFriendList = (props) => {
  return props.filteredList.map((item) => {
    return (
      <Link
        to={`/chatlist/${item.id}`}
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        <SingleFriendItem>
          <FriendItemProfileImage
            src={process.env.PUBLIC_URL + '/images/' + item.profileImage}
          />
          <FriendItemProfileInfo>
            <FriendName>{item.name}</FriendName>
            <FriendStatusMsg>{item.statusMessage}</FriendStatusMsg>
          </FriendItemProfileInfo>
        </SingleFriendItem>
      </Link>
    );
  });
};

export default FriendsList;
