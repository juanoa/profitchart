import React from 'react'
import {UpdateRow} from "./UpdateRow";
import {Account} from "../../../domain/entities/account/Account";

interface Props {
  account: Account;
}

export const AccountUpdates = ({account}: Props) => {
  const {updates, currency} = account

  const updatesClone = updates.slice()

  return (
    <div className="card">
      <table>
        <tbody>
        {
          updatesClone.reverse().map(update =>
            <UpdateRow
              update={update} currency={currency}
              key={`${update.year}${update.month}`}
            />
          )
        }
        </tbody>
      </table>
    </div>
  )
}