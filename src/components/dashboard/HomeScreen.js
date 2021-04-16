import React from 'react';
import {useSelector} from "react-redux";
import {Bar} from 'react-chartjs-2';

import {Header} from "../Header";
import {getAccountsSum, getAccountSumWithLabels} from "../../helpers/chartsHelpers";

export const HomeScreen = () => {

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
    })

    return (
        <>
            <Header title="🏠 Home" />

            <Bar
                data={data}
                width={100}
                height={300}
                options={{
                    maintainAspectRatio: false,
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
        </>
    );
};