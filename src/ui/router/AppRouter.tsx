import React from 'react';
import {BrowserRouter as Router, Switch,} from "react-router-dom";
import {useSelector} from "react-redux";

import {LoginPage} from "../pages/authentication/LoginPage";
import {DashboardRouter} from "./DashboardRouter";
import {Toast} from "../layout/Toast";
import {Loading} from "../layout/Loading";
import {PrivateRoute} from "./PrivateRoute";
import {PublicRoute} from "./PublicRoute";
import {useAuthenticationContext} from "../contexts/AuthenticationContext";

export const AppRouter = () => {

  // @ts-ignore
  const {msgToast, typeToast} = useSelector(state => state.ui)

  const {isLoading, isLoggedIn} = useAuthenticationContext();

  if (isLoading) {
    return (
      <Loading/>
    )
  }

  return (
    <Router>
      <div>
        {
          msgToast &&
          <Toast type={typeToast} msg={msgToast}/>
        }
        <Switch>
          <PublicRoute
            exact
            path='/login'
            component={LoginPage}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path='/'
            component={DashboardRouter}
            isAuthenticated={isLoggedIn}
          />
        </Switch>
      </div>
    </Router>
  );
};