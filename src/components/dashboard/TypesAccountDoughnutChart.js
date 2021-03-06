import React from 'react'
import {Doughnut} from "react-chartjs-2";
import {getTypesAccountForDoughnutChart} from "../../helpers/chartsHelpers";
import {useSelector} from "react-redux";

export const TypesAccountDoughnutChart = () => {

    const {accounts} = useSelector(state => state.accounts)

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
            <Doughnut data={data} />
        </>
    )
}