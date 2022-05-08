import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import {Navbar} from "../layout/Navbar";
import {HomePage} from "../pages/dashboard/HomePage";
import {AccountsPage} from "../pages/accounts/AccountsPage";
import {ConfigurationPage} from "../pages/configuration/ConfigurationPage";
import {CreateAccountPage} from "../pages/accounts/CreateAccountPage";
import {AccountPage} from "../pages/accounts/AccountPage";
import {routes} from "./routes";

export const DashboardRouter = () => {
  return (
    <div className="wrapper">
      <Navbar/>
      <div className="main-panel">
        <div className="content pb-5">
          <Switch>
            {
              routes.map(({path, PageComponent}) => (
                <Route
                  exact
                  path={path}
                  component={PageComponent}
                />
              ))
            }
            <Redirect
              to='/'
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};