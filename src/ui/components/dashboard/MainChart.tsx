import React from 'react'
import {Bar} from "react-chartjs-2";
import {getAccountsSum, getAccountSumWithLabels, getMonthYearString} from "../../helpers/charts-helpers";
import {Account} from "../../../domain/entities/account/Account";

interface Props {
  accounts: Array<Account>;
}

export const MainChart = ({accounts}: Props) => {

  const updates = getAccountsSum(accounts)
  const labels: Array<string> = updates.map(update => getMonthYearString(update));

  const data = {
    labels,
    datasets: [
      {
        type: 'bar',
        label: 'Total',
        backgroundColor: 'rgba(128, 128, 128,0.2)',
        borderColor: 'rgba(128, 128, 128,1)',
        borderWidth: 0,
        hoverBackgroundColor: 'rgba(128, 128, 128,0.4)',
        hoverBorderColor: 'rgba(128, 128, 128,1)',
        data: updates.map(update => update.value)
      },
    ]
  };

  accounts.forEach((account: any) => {
    if (!account.archived) {
      const accountValues = getAccountSumWithLabels(account, labels)
      data.datasets.push({
        type: 'line',
        label: account.name,
        // @ts-ignore
        data: accountValues,
        fill: false,
        borderWidth: 2,
        backgroundColor: account.color,
        borderColor: account.color,
      })
    }
  })

  return (
    <Bar
      data={data}
      width={100}
      height={50}
      options={{
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              min: 0
            }
          }]
        }
      }}
    />
  )
}