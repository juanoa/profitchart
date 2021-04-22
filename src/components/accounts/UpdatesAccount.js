import React from 'react'
import {UpdateRow} from "./UpdateRow";

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
                        <UpdateRow update={update} currency={currency} key={`${update.year}${update.month}`} />
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}