import {types} from "../reducers/types";
import {Account} from "../../../../domain/account/Account";

export const addNewAccount = (account: Account) => ({
  type: types.accountsAddNew,
  payload: {
    ...account
  }
})

export const loadAccounts = (accounts: Array<Account>) => ({
  type: types.accountsLoad,
  payload: [...accounts]
})

export const setAccounts = (accounts: Array<object>) => ({
  type: types.accountsLoad,
  payload: accounts
})

export const deleteAccount = (id: string) => ({
  type: types.accountsDeleted,
  payload: id
})