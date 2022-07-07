import React, {useState} from 'react';
import {MainChart} from "../../components/dashboard/MainChart";
import {AccountsDoughnutChart} from "../../components/dashboard/AccountsDoughnutChart";
import {TypesAccountDoughnutChart} from "../../components/dashboard/TypesAccountDoughnutChart";
import PageLayout from "../../layout/PageLayout";
import {Account} from "../../../domain/entities/account/Account";
import {useAuthenticationProvider} from "../../contexts/AuthenticationContext";
import {useGetAccountsByUser} from "../../../application/accounts/useGetAccountsByUser";

export const HomePage = () => {

  const [accounts, setAccounts] = useState<Array<Account>>([]);

  const {uid} = useAuthenticationProvider()

  const getAccounts = useGetAccountsByUser();

  getAccounts(uid)
    .then(accountsFetched => setAccounts(accountsFetched))

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