import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import PageLayout from "../../layout/PageLayout";
import AccountCard from "../../components/accounts/AccountCard";
import { Account } from '../../../domain/entities/account/Account';
import {useGetAccountsByUser} from "../../../application/accounts/useGetAccountsByUser";

export const AccountsPage = () => {

  const getAccounts = useGetAccountsByUser();
  const accounts: Array<Account> = [];

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