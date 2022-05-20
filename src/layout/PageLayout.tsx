import React, {useEffect} from 'react';
import {Header} from "./Header";

interface Props {
  title: string;
  emoji: string;
  children: JSX.Element | Array<JSX.Element>;
}

const PageLayout = ({title, emoji, children}: Props) => {

  useEffect(() => {
    document.title = title;
  }, []);
  
  
  return (
    <>
      <Header title={title} emoji={emoji}/>
      {children}
    </>
  );
};

export default PageLayout;
