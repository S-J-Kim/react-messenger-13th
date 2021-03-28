import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  height: 50px;
  display: flex;
`;

function Header(props) {
  const { currentUser, onHeaderClick } = props;

  return (
    <HeaderContainer onClick={onHeaderClick}>
      <ProfileImage src={currentUser.profileImage} />
      {currentUser.name}
    </HeaderContainer>
  );
}

const ProfileImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  object-fit: cover;
`;

export default Header;
