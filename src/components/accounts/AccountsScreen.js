import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import {Header} from "../Header";

export const AccountsScreen = () => {

    const {accounts} = useSelector(state => state.accounts)

    return (
        <>
            <Header title="👛 Accounts"/>

            <NavLink
                exact
                to="/accounts/create"
            >
                <div className="btn btn-primary btn-lg mb-4">
                    Create account
                </div>
            </NavLink>

            <div className="row">
                {
                    accounts.map(account => (
                        <div className="col-md-4 mb-4" key={account.id}>
                            <div className="card">
                                <h3>{account.name}</h3>
                                <p>{account.description}</p>
                                <NavLink
                                    exact
                                    to={`/accounts/${account.id}`}
                                >
                                    <div className="btn btn-primary">
                                        More Info
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};