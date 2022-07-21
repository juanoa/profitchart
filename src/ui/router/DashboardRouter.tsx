import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import {Navbar} from "../layout/Navbar";
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
                  key={path}
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