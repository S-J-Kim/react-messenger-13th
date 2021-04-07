import React, { Fragment } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Link } from 'react-router-dom';

const HeaderMenuBar = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  padding: 0 2.5px;
  background-color: rgba(33, 33, 33, 0.25);
`;

const HeaderWindowActionButton = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
`;

const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  padding: 15px;
  align-items: center;
  background-color: rgba(33, 33, 33, 0.15);
`;

const CurrentUserName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

function Header(props) {
  const { currentUser, onHeaderClick } = props;

  return (
    <Fragment>
      <HeaderMenuBar>
        <Link to="/chatlist">
          <HeaderWindowActionButton color={'red'} />
        </Link>
        <HeaderWindowActionButton color={'orange'} />
        <HeaderWindowActionButton color={'lime'} />
      </HeaderMenuBar>
      <HeaderContainer onClick={onHeaderClick}>
        <ProfileImage src={currentUser.profileImage} />
        <CurrentUserName>{currentUser.name}</CurrentUserName>
      </HeaderContainer>
    </Fragment>
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
