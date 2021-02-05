import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import {Navbar} from "../components/Navbar";
import {HomeScreen} from "../components/dashboard/HomeScreen";
import {AccountsScreen} from "../components/accounts/AccountsScreen";
import {ConfigurationScreen} from "../components/configuration/ConfigurationScreen";
import {CreateAccountScreen} from "../components/accounts/CreateAccountScreen";

export const DashboardRouter = () => {
    return (
        <div className="wrapper">
            <Navbar />
            <div className="main-panel">
                <div className="content">
                    <Switch>
                        <Route
                            exact
                            path='/'
                            component={HomeScreen}
                        />

                        <Route
                            exact
                            path='/accounts'
                            component={AccountsScreen}
                        />

                        <Route
                            exact
                            path='/accounts/create'
                            component={CreateAccountScreen}
                        />

                        <Route
                            exact
                            path='/configuration'
                            component={ConfigurationScreen}
                        />

                        <Redirect
                            to='/'
                        />
                    </Switch>
                </div>
            </div>

        </div>
    );
};