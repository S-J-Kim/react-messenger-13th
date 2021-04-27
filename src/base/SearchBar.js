import React from 'react';

const SearchBar = (props) => {
  return <input placeholder="입력" onChange={props.onInputChange} />;
};

export default SearchBar;
