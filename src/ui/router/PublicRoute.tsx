import React from 'react';
import {Route, Redirect} from 'react-router-dom';

interface Props {
  isAuthenticated: boolean;
  component: React.ComponentType;
  path: string;
  exact: boolean;
}

export const PublicRoute = ({isAuthenticated, component: Component, ...rest}: Props) => {
  return (
    <Route {...rest}
           component={(props: any) => (
             (isAuthenticated)
               ? (<Redirect to="/"/>)
               : (<Component {...props} />)
           )}

    />
  )
}
