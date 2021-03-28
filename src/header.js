import React from 'react';

function Header(props) {
    const { currentUser, onHeaderClick } = props;

    return (
        <div onClick={onHeaderClick}>{currentUser}</div>
    )
}

export default Header;