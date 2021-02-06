import {finishLoading, setToast, startLoading} from "./ui";
import {db} from "../config/firebase-config";

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

        const doc = await db.collection(`${uid}/profitchart/account`).add(newAccount)
        dispatch(finishLoading())
        dispatch(setToast('The account was create successfully', 'success'))
    }
}