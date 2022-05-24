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
              routes.map(({path, PageComponent}, index) => (
                <Route
                  exact
                  path={path}
                  component={PageComponent}
                  key={index}
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