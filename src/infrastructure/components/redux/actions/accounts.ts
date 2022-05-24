import {types} from "../reducers/types";
import {Account} from "../../../../domain/account/Account";

export const addNewAccount = (account: Account) => ({
  type: types.accountsAddNew,
  payload: {
    ...account
  }
})

export const startLoadingAccounts = () => ({
  type: types.accountsLoad,
  payload: []
})

export const setAccounts = (accounts: Array<object>) => ({
  type: types.accountsLoad,
  payload: accounts
})