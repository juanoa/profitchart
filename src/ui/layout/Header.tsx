import React from 'react';

interface Props {
  title: string;
  emoji: string;
}

export const Header = ({title, emoji}: Props) => {
  return (
    <div className="header__container">
      <h1>{emoji} {title}</h1>
      <hr/>
    </div>
  );
};