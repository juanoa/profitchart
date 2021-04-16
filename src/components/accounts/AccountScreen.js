import React from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Bar} from "react-chartjs-2";

import {Header} from "../Header";
import {useForm} from "../../hooks/useForm";
import {startCreateUpdate} from "../../actions/accounts";
import {getAccountSum} from "../../helpers/chartsHelpers";
import {getMonth} from "../../helpers/getMonth";


export const AccountScreen = () => {

    const dispatch = useDispatch()

    const {accounts} = useSelector(state => state.accounts)
    const {loading} = useSelector (state => state.ui)

    const {id} = useParams()
    const account = accounts.find(function (a) {
        return a.id === id
    })
    const {name, description, type, currency, color, date, archived, updates} = account

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

    const [formValues, handleInputChanges] = useForm({
        year: '',
        month: '',
        value: ''
    })
    const {year, month, value} = formValues

    const handleForm = (e) => {
        e.preventDefault()
        dispatch(startCreateUpdate(account, year, month, value))
    }

    return (
        <>
            <Header title={`ℹ️ ${name}`}/>
            <p>{description}</p>

            <h2>Info</h2>
            <div className="card mb-4">
                <p>{type}</p>
                <p>{currency}</p>
                <p>{color}</p>
                <p>{new Date(date).toDateString()}</p>
                <p>{archived.toString()}</p>
            </div>

            <div className="card mb-5 pt-5">
                <Bar
                    data={data}
                    width={100}
                    height={10}
                    options={{
                        scales: {
                            yAxes: [{
                                display: false, // hides the vertical scale
                                stacked: true, // stacks the bars on the y axis
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

            <h2>Updates</h2>
            <div className="card mb-4">
                <form onSubmit={handleForm}>
                    <h3>New update</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <label>Year</label>
                            <input
                                className="input"
                                autoComplete="off"
                                type="text"
                                name="year"
                                value={year}
                                onChange={handleInputChanges}
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <label>Month</label>
                            <input
                                className="input"
                                autoComplete="off"
                                type="text"
                                name="month"
                                value={month}
                                onChange={handleInputChanges}
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <label>Value</label>
                            <input
                                className="input"
                                autoComplete="off"
                                type="text"
                                name="value"
                                placeholder={currency}
                                value={value}
                                onChange={handleInputChanges}
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success btn-lg mt-3"
                        disabled={loading}
                    >
                        Save
                    </button>
                </form>
            </div>
            <div className="card">
                <table>
                    <thead>
                    <tr>
                        <th>Year</th>
                        <th>Month</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        updates.map(update => (
                            <tr key={`${update.year}${update.month}`}>
                                <td>{update.year}</td>
                                <td>{getMonth(update.month)}</td>
                                <td>{update.value} <small>{currency}</small></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
};