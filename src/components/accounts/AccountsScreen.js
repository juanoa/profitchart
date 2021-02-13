import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import {Header} from "../Header";

export const AccountsScreen = () => {

    const {accounts} = useSelector(state => state.accounts)

    return (
        <>
            <Header title="👛 Accounts" />

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
                        <div className="col-md-6 mb-4" key={account.id}>
                            <div className="card">
                                <div className="row">
                                    <div className="col-4">
                                        <p>{account.type}</p>
                                    </div>
                                    <div className="col-8">
                                        <h3>{account.name}</h3>
                                        <p>{account.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};