import React from 'react'
import {Bar} from "react-chartjs-2";
import {getAccountSum} from "../../helpers/chartsHelpers";

export const HistoricalAccount = ({account}) => {

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
        <div className="card mb-5 pt-5">
            <Bar
                data={data}
                width={100}
                height={10}
                options={{
                    scales: {
                        yAxes: [{
                            display: false, // hides the vertical scale
                            stacked: false, // stacks the bars on the y axis
                            ticks: {
                                beginAtZero: true,
                                min: 0
                            }
                        }]
                    },
                    legend: {
                        display: false // hides the legend
                    },
                    tooltips: {
                        enabled: true // hides the tooltip.
                    }
                }}
            />
        </div>
    )
}