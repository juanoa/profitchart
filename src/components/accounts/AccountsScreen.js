import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import {Header} from "../Header";

// Icons: https://www.flaticon.es/packs/accounting-3?word=ahorro
import Savings from './img/savings.png'
import Investments from './img/investments.png'
import Others from './img/others.png'

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
                                    <div className="col-3 text-center">
                                        {
                                            account.type === 'savings' && <img src={Savings} alt="savings" width={'75%'} />
                                        }
                                        {
                                            account.type === 'investment' && <img src={Investments} alt="investments" width={'75%'} />
                                        }
                                        {
                                            account.type === 'other' && <img src={Others} alt="other" width={'75%'} />
                                        }
                                        <p>{account.currency}</p>
                                    </div>
                                    <div className="col-9">
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
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};