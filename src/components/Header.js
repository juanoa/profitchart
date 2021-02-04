import React from 'react';

export const Header = ({title}) => {
    return (
        <div className="header__container">
            <h1>{title}</h1>
            <hr />
        </div>
    );
};