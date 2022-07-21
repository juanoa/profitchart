import React from 'react'
import {Doughnut} from "react-chartjs-2";
import {getTypesAccountForDoughnutChart} from "../../helpers/charts-helpers";
import {Account} from "../../../domain/entities/account/Account";

interface Props {
  accounts: Array<Account>;
}

export const TypesAccountDoughnutChart = ({accounts}: Props) => {

  const dataChart = getTypesAccountForDoughnutChart(accounts)

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
      <h2>Types Account</h2>
      <Doughnut data={data}/>
    </>
  )
}