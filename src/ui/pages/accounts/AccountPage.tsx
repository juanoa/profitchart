import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {InfoAccount} from "../../components/accounts/InfoAccount";
import {AccountUpdates} from "../../components/accounts/AccountUpdates";
import {HistoricalAccountChart} from "../../components/accounts/HistoricalAccountChart";
import {CreateUpdate} from "../../components/accounts/CreateUpdate";
import PageLayout from "../../layout/PageLayout";
import {useAuthenticationContext} from "../../contexts/AuthenticationContext";
import {useGetAccount} from "../../../application/accounts/useGetAccount";
import {Optional} from "../../../domain/entities/Optional";
import {Account} from "../../../domain/entities/account/Account";
import {Loading} from "../../layout/Loading";

interface AccountPageParamsInterface {
  id: string;
}

export const AccountPage = () => {
  const [account, setAccount] = useState<Optional<Account>>();

  const {id} = useParams<AccountPageParamsInterface>()
  const {uid} = useAuthenticationContext();

  const getAccount = useGetAccount();

  useEffect(() => {
    getAccount(id, uid)
      .then(account => setAccount(account));
  }, []);

  if (!account) {
    return <Loading/>
  }

  return (
    <PageLayout title={account.name} emoji="ℹ️">
      <h2>Info</h2>
      <InfoAccount account={account}/>
      <div className="card mb-5 pt-5">
        <HistoricalAccountChart account={account}/>
      </div>

      <h2>Updates</h2>
      <CreateUpdate account={account}/>
      <AccountUpdates account={account}/>
    </PageLayout>
  );
};