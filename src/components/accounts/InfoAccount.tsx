import React from 'react'
import {useDispatch} from "react-redux";
import {startUpdateAccount} from "../../actions/accounts";
import {Account} from "../../interfaces/account/Account";
import {AccountType} from "../../interfaces/account/AccountType";
import {Optional} from "../../interfaces/Optional";
import {Currency} from "../../interfaces/currency/Currency";
import {useCurrencyConfigRepository} from "../../hooks/useCurrencyConfigRepository";
import {useAccountConfigRepository} from "../../hooks/useAccountConfigRepository";

interface Props {
  account: Account;
}

export const InfoAccount = ({account}: Props) => {

  const {date, archived, description} = account

  const dispatch = useDispatch()
  const currencyConfigRepository = useCurrencyConfigRepository()
  const accountConfigRepository = useAccountConfigRepository()

  const archivedAccount = () => {
    account.archived = true
    dispatch(startUpdateAccount(account))
  }

  const activatedAccount = () => {
    account.archived = false
    dispatch(startUpdateAccount(account))
  }

  const accountType: Optional<AccountType> = accountConfigRepository.getAccountTypeById(account.type)
  const currency: Optional<Currency> = currencyConfigRepository.getCurrencyByCode(account.currency);

  return (
    <div className="card mb-4">
      <div className="row">
        <div className="col-md-9">
          <p><b>{description}</b></p>
          <div className="tag tag-green">{accountType?.name} {accountType?.emoji}</div>
          <p>{currency?.name}</p>
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