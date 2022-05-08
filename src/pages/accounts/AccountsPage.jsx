import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import PageLayout from "../../layout/PageLayout";
import * as PropTypes from "prop-types";
import AccountCard from "../../components/accounts/AccountCard";

AccountCard.propTypes = {account: PropTypes.any};
export const AccountsPage = () => {

  const {accounts} = useSelector(state => state.accounts)

  return (
    <PageLayout title="👛 Accounts">
      <NavLink
        exact
        to="/accounts/create"
      >
        <div className="btn btn-primary btn-lg mb-4">
          Create account
        </div>
      </NavLink>

      <div className="row">
        {accounts.map(account => <AccountCard key={account.id} account={account}/>)}
      </div>
    </PageLayout>
  );
};