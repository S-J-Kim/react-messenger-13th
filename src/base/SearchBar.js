import React from 'react';
import styled from 'styled-components';

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledInputBox = styled.input`
  width: 85%;
  margin: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  font-size: 18px;
  padding: 5px 10px;
  transition: all 0.25s ease-in;
  font-weight: lighter;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: 100;
  }
`;

const InputBoxClear = styled.div`
  font-size: 11px;
  margin: auto;
  transition: font-size 0.1s ease-in-out;
  color: gray;

  &:hover {
    cursor: pointer;
    font-size: 15px;
  }
`;

const SearchBar = (props) => {
  return (
    <StyledInputContainer>
      <StyledInputBox
        placeholder="검색하기"
        onChange={props.onInputChange}
        value={props.value}
      />
      <InputBoxClear onClick={props.onInputReset}>✕</InputBoxClear>
    </StyledInputContainer>
  );
};

export default SearchBar;
