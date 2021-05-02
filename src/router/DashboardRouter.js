import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import {Navbar} from "../components/Navbar";
import {HomeScreen} from "../components/dashboard/HomeScreen";
import {AccountsScreen} from "../components/accounts/AccountsScreen";
import {ConfigurationScreen} from "../components/configuration/ConfigurationScreen";
import {CreateAccountScreen} from "../components/accounts/CreateAccountScreen";
import {AccountScreen} from "../components/accounts/AccountScreen";

export const DashboardRouter = () => {
    return (
        <div className="wrapper">
            <Navbar />
            <div className="main-panel">
                <div className="content pb-5">
                    <Switch>
                        <Route
                            exact
                            path='/profitchart/'
                            component={HomeScreen}
                        />

                        <Route
                            exact
                            path='/profitchart/accounts'
                            component={AccountsScreen}
                        />

                        <Route
                            exact
                            path='/profitchart/accounts/create'
                            component={CreateAccountScreen}
                        />

                        <Route
                            exact
                            path='/profitchart/accounts/:id'
                            component={AccountScreen}
                        />

                        <Route
                            exact
                            path='/profitchart/configuration'
                            component={ConfigurationScreen}
                        />

                        <Redirect
                            to='/profitchart/'
                        />
                    </Switch>
                </div>
            </div>
        </div>
    );
};