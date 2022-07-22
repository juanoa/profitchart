import React, {useEffect, useState} from 'react';
import {MainChart} from "../../components/dashboard/MainChart";
import {AccountsDoughnutChart} from "../../components/dashboard/AccountsDoughnutChart";
import {TypesAccountDoughnutChart} from "../../components/dashboard/TypesAccountDoughnutChart";
import PageLayout from "../../layout/PageLayout";
import {Account} from "../../../domain/entities/account/Account";
import {useAuthenticationContext} from "../../contexts/AuthenticationContext";
import {useGetAccountsByUser} from "../../../application";
import {Loading} from "../../layout/Loading";

export const HomePage = () => {

  const [accounts, setAccounts] = useState<Array<Account>>();

  const {user} = useAuthenticationContext()

  const getAccounts = useGetAccountsByUser();

  useEffect(() => {
    getAccounts(user?.uid)
      .then(accountsFetched => setAccounts(accountsFetched))
  }, []);

  if (!accounts) {
    return <Loading/>
  }

  return (
    <PageLayout title="Dashboard" emoji="🏠">
      <MainChart accounts={accounts}/>
      <div className="row mt-5">
        <div className="col-md-6">
          <AccountsDoughnutChart accounts={accounts}/>
        </div>
        <div className="col-md-6">
          <TypesAccountDoughnutChart accounts={accounts}/>
        </div>
      </div>
    </PageLayout>
  );
};