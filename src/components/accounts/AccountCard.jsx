import React from 'react';
import {NavLink} from "react-router-dom";
import {HistoricalAccountChart} from "./HistoricalAccountChart";

const AccountCard = ({account}) => {

  const {id, name, description} = account;

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="account__card-title">
          <div>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
          <NavLink
            exact
            to={`/accounts/${id}`}
          >
            <div className="btn btn-primary mt-3">
              More Info
            </div>
          </NavLink>
        </div>
        <HistoricalAccountChart account={account} tooltips={false} xAxes={false}/>
      </div>
    </div>
  )
};

export default AccountCard;
