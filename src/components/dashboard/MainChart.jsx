import React from 'react'
import {Bar} from "react-chartjs-2";
import {useSelector} from "react-redux";
import {getAccountsSum, getAccountSumWithLabels} from "../../helpers/chartsHelpers";

export const MainChart = () => {

  const {accounts} = useSelector(state => state.accounts)

  const {labels, values} = getAccountsSum(accounts)

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
        data: values
      },
    ]
  };

  accounts.forEach(account => {
    if (!account.archived) {
      const accountValues = getAccountSumWithLabels(account, labels)
      data.datasets.push({
        type: 'line',
        label: account.name,
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