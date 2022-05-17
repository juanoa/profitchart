import React, {useEffect} from 'react';
import {Header} from "./Header";

const PageLayout = ({title, emoji, children}) => {

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
