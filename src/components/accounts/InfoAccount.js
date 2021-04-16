import React from 'react'

export const InfoAccount = ({account}) => {

    const {type, currency, color, date, archived} = account

    return (

        <div className="card mb-4">
            <p>{type}</p>
            <p>{currency}</p>
            <p>{color}</p>
            <p>{new Date(date).toDateString()}</p>
            <p>{archived.toString()}</p>
        </div>

    )
}