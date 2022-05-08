import React from 'react';
import {Header} from "./Header";

const PageLayout = ({title, children}) => {
  return (
    <>
      <Header title={title}/>
      {children}
    </>
  );
};

export default PageLayout;
