import React from 'react'
import {Doughnut} from "react-chartjs-2";
import {getAccountsForDoughnutChart} from "../../helpers/chartsHelpers";
import {useSelector} from "react-redux";

export const AccountsDoughnutChart = () => {

  const {accounts} = useSelector(state => state.accounts)

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