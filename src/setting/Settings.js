import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgba(33, 33, 33, 0.05);
`;

const StyledHeader = styled.div`
  font-size: 25px;
  font-weight: bolder;
  background-color: rgba(33, 33, 33, 0.35);
  padding: 20px;
  color: whitesmoke;
`;

const Settings = (props) => {
  return (
    <StyledContainer>
      <StyledHeader>Settings</StyledHeader>
    </StyledContainer>
  );
};

export default Settings;
