import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {InfoAccount} from "../../components/accounts/InfoAccount";
import {AccountUpdates} from "../../components/accounts/AccountUpdates";
import {HistoricalAccountChart} from "../../components/accounts/HistoricalAccountChart";
import {CreateUpdate} from "../../components/accounts/CreateUpdate";
import PageLayout from "../../layout/PageLayout";


export const AccountPage = () => {

  // @ts-ignore
  const {accounts} = useSelector(state => state.accounts)
  // @ts-ignore
  const {id} = useParams()

  const account = accounts.find((account: any) => account.id === id);
  const {name} = account

  return (
    <PageLayout title={name} emoji="ℹ️">

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