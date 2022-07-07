import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
    isAuthenticated: boolean;
    component: React.ComponentType;
    path: string;
}

export const PrivateRoute = ({isAuthenticated, component: Component, ...rest}: Props) => {
    return (
        <Route { ...rest }
            component={ (props: any) => (
                ( isAuthenticated )
                    ? ( <Component { ...props } /> )
                    : ( <Redirect to="/login" /> )
            )}
        
        />
    )
}
