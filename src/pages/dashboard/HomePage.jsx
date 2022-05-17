import React from 'react';
import {MainChart} from "../../components/dashboard/MainChart";
import {AccountsDoughnutChart} from "../../components/dashboard/AccountsDoughnutChart";
import {TypesAccountDoughnutChart} from "../../components/dashboard/TypesAccountDoughnutChart";
import PageLayout from "../../layout/PageLayout";

export const HomePage = () => {

  return (
    <PageLayout title="Dashboard" emoji="🏠">
      <MainChart/>
      <div className="row mt-5">
        <div className="col-md-6">
          <AccountsDoughnutChart/>
        </div>
        <div className="col-md-6">
          <TypesAccountDoughnutChart/>
        </div>
      </div>
    </PageLayout>
  );
};