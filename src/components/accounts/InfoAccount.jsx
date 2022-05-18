import React from 'react'
import {useDispatch} from "react-redux";
import {startUpdateAccount} from "../../actions/accounts";
import {getAccountTypeById} from "../../repository/config/account-config-repository";
import {getCurrencyByCode} from "../../repository/config/currency-config-repository";

export const InfoAccount = ({account}) => {

  const {date, archived, description} = account

  const dispatch = useDispatch()

  const archivedAccount = () => {
    account.archived = true
    dispatch(startUpdateAccount(account))
  }

  const activatedAccount = () => {
    account.archived = false
    dispatch(startUpdateAccount(account))
  }

  const accountType = getAccountTypeById(account.type);
  const currency = getCurrencyByCode(account.currency);

  return (
    <div className="card mb-4">
      <div className="row">
        <div className="col-md-9">
          <p><b>{description}</b></p>
          <div className="tag tag-green">{accountType.name} {accountType.emoji}</div>
          <p>{currency.name}</p>
          <p>{new Date(date).toDateString()}</p>
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