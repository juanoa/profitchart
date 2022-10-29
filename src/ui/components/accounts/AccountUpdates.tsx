import React from 'react'
import {UpdateRow} from "./UpdateRow";
import {Account} from "../../../domain/entities/account/Account";
import AccountUpdate from "../../../domain/entities/account/AccountUpdate";
import {useDeleteUpdateFromAccount} from "../../../application/accounts/useDeleteUpdateFromAccount";
import {useAuthenticationContext} from "../../contexts/AuthenticationContext";

interface Props {
  account: Account;
  onChange: (account: Account) => void;
}

export const AccountUpdates = ({account, onChange}: Props) => {
  const {updates, currency} = account

  const {user} = useAuthenticationContext();
  const deleteUpdateFromAccount = useDeleteUpdateFromAccount()

  const handleDelete = (update: AccountUpdate) => {
    deleteUpdateFromAccount(user?.uid, account, update.date).then(onChange)
  }

  return (
    <div className="card">
      <div className="account__account-updates">
        {
          updates.reverse().map(update =>
            <UpdateRow
              onDelete={handleDelete}
              update={update} currency={currency}
              key={`${update.date.year}${update.date.month}${Math.random()}`}
            />
          )
        }
      </div>
    </div>
  )
}