import React from 'react';
import {NavLink} from "react-router-dom";
import {HistoricalAccountChart} from "./HistoricalAccountChart";
import {Account} from "../../domain/account/Account";

interface Props {
  account: Account;
}

const AccountCard = ({account}: Props) => (
  <div className="col-md-4 mb-4">
    <div className="card">
      <div className="account__card-title">
        <div>
          <h3>{account.name}</h3>
          <p>{account.description}</p>
        </div>
        <NavLink
          exact
          to={`/accounts/${account.id}`}
        >
          <div className="btn btn-primary mt-3">
            More Info
          </div>
        </NavLink>
      </div>
      <HistoricalAccountChart account={account} tooltips={false} xAxes={false}/>
    </div>
  </div>
);

export default AccountCard;
