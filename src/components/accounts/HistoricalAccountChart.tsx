import React from 'react'
import {Bar} from "react-chartjs-2";
import {getAccountSum} from "../../helpers/chartsHelpers";
import {Account} from "../../domain/account/Account";

interface Props {
  account: Account;
  tooltips?: boolean;
  xAxes?: boolean;
}

export const HistoricalAccountChart = ({account, tooltips = true, xAxes = true}: Props) => {

  const {color} = account

  const {labels, values} = getAccountSum(account)
  const data = {
    labels,
    datasets: [
      {
        backgroundColor: color,
        borderColor: color,
        hoverBackgroundColor: color,
        hoverBorderColor: color,
        data: values
      },
    ]
  };

  return (
    <Bar
      data={data}
      width={100}
      height={10}
      options={{
        animation: false,
        scales: {
          yAxes: [{
            display: false, // hides the vertical scale
            stacked: false, // stacks the bars on the y axis
            ticks: {
              beginAtZero: true,
              min: 0
            }
          }],
          xAxes: [{
            display: xAxes,
          }]
        },
        legend: {
          display: false // hides the legend
        },
        tooltips: {
          enabled: tooltips
        }
      }}
    />
  )
}