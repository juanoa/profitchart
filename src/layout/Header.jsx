import React from 'react';

export const Header = ({title, emoji}) => {
  return (
    <div className="header__container">
      <h1>{emoji} {title}</h1>
      <hr/>
    </div>
  );
};