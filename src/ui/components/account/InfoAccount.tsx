import React from 'react'
import {getAccountTypeById} from "../../../infrastructure/components/config/account-config-dao";
import {getCurrencyByCode} from "../../../infrastructure/components/config/currency-config-dao";
import {Account} from "../../../domain/account/Account";
import {AccountType} from "../../../domain/account/AccountType";
import {Optional} from "../../../domain/Optional";
import {Currency} from "../../../domain/currency/Currency";
import {useDeleteAccount} from "../../../application/usecases/account/delete-account";
import {useHistory} from "react-router-dom";

interface Props {
  account: Account;
}

export const InfoAccount = ({account}: Props) => {

  const {id, date, archived, description} = account
  const history = useHistory();

  const deleteAccount = useDeleteAccount();

  const archivedAccount = () => {
    account.archived = true
    // dispatch(startUpdateAccount(account))
  }

  const activatedAccount = () => {
    account.archived = false
    // dispatch(startUpdateAccount(account))
  }

  const handleOnDelete = () => {
    deleteAccount(id)
    history.push('/accounts')
  }

  const accountType: Optional<AccountType> = getAccountTypeById(account.type);
  const currency: Optional<Currency> = getCurrencyByCode(account.currency);

  return (
    <div className="card mb-4">
      <div className="row">
        <div className="col-md-9">
          <p><b>{description}</b></p>
          <div className="tag tag-green">{accountType?.name} {accountType?.emoji}</div>
          <p>{currency?.name}</p>
          <p>{new Date(date).toDateString()}</p>
          <div className="btn btn-danger" onClick={handleOnDelete}>Delete</div>
        </div>
        <div className="col-md-3 align-right">
          {
            !archived
              ? <div className="btn btn-success" onClick={archivedAccount}>Active</div>
              : <div className="btn btn-danger" onClick={activatedAccount}>Archived</div>
          }
        </div>
      </div>
    </div>

  )
}