import {finishLoading, setToast, startLoading} from "./ui";
import {types} from "../reducers/types";
import {create, getAllOrderByDate, update} from "../repository/firebase/accounts-firebase-repository";
import {AccountUpdate} from "../domain/account/AccountUpdate";
import {accountUpdateFirebaseMapperToDto} from "../helpers/mappers/firebase/account/account-update-firebase-mapper";
import {orderAccountUpdatesByDate} from "../helpers/date-helpers";

export const startCreateAccount = (name: string, type: string, description: string, color: string, currency: string) => {
  return async (dispatch: any, getState: any) => {
    dispatch(startLoading())
    const {uid} = getState().auth
    const newAccount = {
      name: name,
      type: type,
      description: description,
      color: color,
      archived: false,
      currency: currency,
      date: new Date().getTime(),
      updates: []
    }

    const doc = await create(uid, newAccount);
    dispatch(addNewAccount(doc.id, newAccount))
    dispatch(finishLoading())
    // dispatch(setToast('The account was create successfully', 'success'))
  }
}

export const addNewAccount = (id: string, account: object) => ({
  type: types.accountsAddNew,
  payload: {
    id,
    ...account
  }
})

export const startCreateUpdate = (account: any, newUpdate: AccountUpdate) => {
  return async (dispatch: any, getState: any) => {
    dispatch(startLoading())
    const {uid} = getState().auth

    const accountUpdatedFirebaseDto = accountUpdateFirebaseMapperToDto(newUpdate);

    // @ts-ignore
    account.updates.push(newUpdate)
    account.updates = orderAccountUpdatesByDate(account.updates);
    const accountToFirestore: any = {...account}
    delete accountToFirestore.id

    await update(uid, account.id, accountToFirestore)
    dispatch(updateAccount(account.id, accountToFirestore))
    dispatch(finishLoading())
    // dispatch(setToast('The update was created successfully', 'success'))
  }
}

export const startUpdateAccount = (account: any) => {
  return async (dispatch: any, getState: any) => {
    dispatch(startLoading())
    const {uid} = getState().auth

    const accountToFirestore = {...account}
    delete accountToFirestore.id

    await update(uid, account.id, accountToFirestore)
    dispatch(updateAccount(account.id, accountToFirestore))
    dispatch(finishLoading())
    // dispatch(setToast('The account was updated successfully', 'success'))
  }
}

const updateAccount = (id: string, account: object) => ({
  type: types.accountsUpdated,
  payload: {
    id,
    account: {
      id,
      ...account
    }
  }
})

export const startLoadingAccounts = (uid: string) => {
  return async (dispatch: any) => {
    const accounts = await getAllOrderByDate(uid)
    dispatch(setAccounts(accounts))
  }
}

export const setAccounts = (accounts: Array<object>) => ({
  type: types.accountsLoad,
  payload: accounts
})