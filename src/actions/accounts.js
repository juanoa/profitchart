import {finishLoading, setToast, startLoading} from "./ui";
import {db} from "../config/firebase-config";
import {loadAcconts} from "../helpers/loadAccounts";
import {types} from "../types/types";

export const startCreateAccount = (name, type, description, color, currency) => {
    return async (dispatch, getState) => {
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

        const doc = await db.collection(`${uid}/profitchart/accounts`).add(newAccount)
        dispatch(addNewAccount(doc.id, newAccount))
        dispatch(finishLoading())
        dispatch(setToast('The account was create successfully', 'success'))
    }
}

export const addNewAccount = (id, account) => ({
    type: types.accountsAddNew,
    payload: {
        id,
        ...account
    }
})

export const startCreateUpdate = (account, year, month, value) => {
    return async (dispatch, getState) => {
        dispatch(startLoading())
        const {uid} = getState().auth

        const newUpdate = {
            year,
            month,
            value
        }

        account.updates.push(newUpdate)
        const accountToFirestore = {...account}
        delete accountToFirestore.id

        await db.doc(`${uid}/profitchart/accounts/${account.id}`).update(accountToFirestore)
        dispatch(updateAccount(account.id, accountToFirestore))
        dispatch(finishLoading())
        dispatch(setToast('The update was created successfully', 'success'))
    }
}

export const startUpdateAccount = (account) => {
    return async (dispatch, getState) => {
        dispatch(startLoading())
        const {uid} = getState().auth

        const accountToFirestore = {...account}
        delete accountToFirestore.id

        await db.doc(`${uid}/profitchart/accounts/${account.id}`).update(accountToFirestore)
        dispatch(updateAccount(account.id, accountToFirestore))
        dispatch(finishLoading())
        dispatch(setToast('The account was updated successfully', 'success'))
    }
}

const updateAccount = (id, account) => ({
    type: types.accountsUpdated,
    payload: {
        id,
        account: {
            id,
            ...account
        }
    }
})

export const startLoadingAccounts = (uid) => {
    return async (dispatch) => {
        const accounts = await loadAcconts(uid)
        dispatch(setAccounts(accounts))
    }
}

export const setAccounts = (accounts) => ({
    type: types.accountsLoad,
    payload: accounts
})