import React from 'react'
import {UpdateRow} from "./UpdateRow";
import {Account} from "../../../domain/entities/account/Account";

interface Props {
  account: Account;
}

export const AccountUpdates = ({account}: Props) => {
  const {updates, currency} = account

  return (
    <div className="card">
      <table>
        <tbody>
        {
          updates.reverse().map(update =>
            <UpdateRow
              update={update} currency={currency}
              key={`${update.date.year}${update.date.month}${Math.random()}`}
            />
          )
        }
        </tbody>
      </table>
    </div>
  )
}