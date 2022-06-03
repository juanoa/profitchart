import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import PageLayout from "../../layout/PageLayout";
import AccountCard from "../../components/accounts/AccountCard";
import { Account } from '../../interfaces/account/Account';

export const AccountsPage = () => {

  // @ts-ignore
  const {accounts} = useSelector(state => state.accounts)

  return (
    <PageLayout title="Accounts" emoji="👛">
      <NavLink
        exact
        to="/accounts/create"
      >
        <div className="btn btn-primary btn-lg mb-4">
          Create account
        </div>
      </NavLink>

      <div className="row">
        {accounts.map((account: Account) => <AccountCard key={account.id} account={account}/>)}
      </div>
    </PageLayout>
  );
};