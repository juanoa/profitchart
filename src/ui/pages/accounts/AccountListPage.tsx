import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import PageLayout from "../../layout/PageLayout";
import AccountCard from "../../components/accounts/AccountCard";
import {Account} from '../../../domain/entities/account/Account';
import {useGetAccountsByUser} from "../../../application/accounts/useGetAccountsByUser";
import {useAuthenticationContext} from "../../contexts/AuthenticationContext";

export const AccountListPage = () => {

  const [accounts, setAccounts] = useState<Array<Account>>([]);

  const {uid} = useAuthenticationContext();

  const getAccounts = useGetAccountsByUser();

  useEffect(() => {
    getAccounts(uid)
      .then(accounts => setAccounts(accounts));
  }, []);

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