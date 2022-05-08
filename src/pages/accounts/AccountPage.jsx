import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {InfoAccount} from "../../components/accounts/InfoAccount";
import {UpdatesAccount} from "../../components/accounts/UpdatesAccount";
import {HistoricalAccountChart} from "../../components/accounts/HistoricalAccountChart";
import {CreateUpdate} from "../../components/accounts/CreateUpdate";
import PageLayout from "../../layout/PageLayout";


export const AccountPage = () => {

  const {accounts} = useSelector(state => state.accounts)

  const {id} = useParams()

  const account = accounts.find(function (a) {
    return a.id === id
  })
  const {name, description} = account

  return (
    <PageLayout title={`ℹ️ ${name}`}>

      <h2>Info</h2>
      <InfoAccount account={account}/>
      <div className="card mb-5 pt-5">
        <HistoricalAccountChart account={account}/>
      </div>

      <h2>Updates</h2>
      <CreateUpdate account={account}/>
      <UpdatesAccount account={account}/>
    </PageLayout>
  );
};