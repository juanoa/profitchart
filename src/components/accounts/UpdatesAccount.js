import React from 'react'
import {getMonth} from "../../helpers/getMonth";

export const UpdatesAccount = ({account}) => {
    const {updates, currency} = account

    const updatesClone = updates.slice()

    return (
        <div className="card">
            <table>
                <thead>
                <tr>
                    <th>Year</th>
                    <th>Month</th>
                    <th className="align-right">Value</th>
                </tr>
                </thead>
                <tbody>
                {
                    updatesClone.reverse().map(update => (
                        <tr key={`${update.year}${update.month}`}>
                            <td>{update.year}</td>
                            <td>{getMonth(update.month)}</td>
                            <td className="align-right">{update.value} <small>{currency}</small></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}