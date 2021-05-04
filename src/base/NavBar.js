import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 100%;
  padding-top: 70px;
  background-color: lightgray;
  box-sizing: border-box;
`;

const IconBase = styled.img`
  width: 30px;
  height: 30px;
  margin: 15px;
`;

function NavBar() {
  return (
    <NavBarContainer>
      <Link to="/">
        <IconBase
          src={process.env.PUBLIC_URL + '/images/user.png'}
          alt="users"
        />
      </Link>
      <Link to="/chatlist">
        <IconBase
          src={process.env.PUBLIC_URL + '/images/chat.png'}
          alt="chats"
        />
      </Link>
      <Link to="/settings">
        <IconBase src={process.env.PUBLIC_URL + '/images/setting.png'} />
      </Link>
    </NavBarContainer>
  );
}

export default NavBar;
