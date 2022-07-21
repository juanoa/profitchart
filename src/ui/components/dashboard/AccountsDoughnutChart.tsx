import React, {useState} from 'react'
import {Doughnut} from "react-chartjs-2";
import {getAccountsForDoughnutChart} from "../../helpers/charts-helpers";
import {useSelector} from "react-redux";
import {useAuthenticationContext} from "../../contexts/AuthenticationContext";
import {useGetAccountsByUser} from "../../../application/accounts/useGetAccountsByUser";
import {Account} from "../../../domain/entities/account/Account";

interface Props {
  accounts: Array<Account>;
}

export const AccountsDoughnutChart = ({accounts}: Props) => {

  const dataChart = getAccountsForDoughnutChart(accounts)

  const data = {
    labels: dataChart.labels,
    datasets: [
      {
        data: dataChart.data,
        backgroundColor: dataChart.colors
      },
    ],
  }

  return (
    <>
      <h2>Accounts</h2>
      <Doughnut data={data}/>
    </>
  )
}