import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 80px;
  display: flex;
  padding: 10px;
  align-items: center;
  background-color: gray;
`;

const CurrentUserName = styled.div`
  font-size: 20px;
`;

function Header(props) {
  const { currentUser, onHeaderClick } = props;

  return (
    <HeaderContainer onClick={onHeaderClick}>
      <ProfileImage src={currentUser.profileImage} />
      <CurrentUserName>{currentUser.name}</CurrentUserName>
    </HeaderContainer>
  );
}

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 20px;
  margin-left: 10px;
`;

export default Header;
