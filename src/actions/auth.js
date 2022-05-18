import {types} from "../reducers/types";
import {auth} from "../config/firebase-config";
import {finishLoading, setToast, startLoading} from "./ui";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading())
        auth.signInWithEmailAndPassword(email, password)
            .then( ({user}) => {
                dispatch(login(user.uid, user.email))
            })
            .catch(e => {
                dispatch(setToast('User or password are wrong', 'error'))
            })
            .finally(() => {
                dispatch(finishLoading())
            })
    }
}

export const login = (uid, email) => ({
    type: types.login,
    payload: {
        uid,
        email
    }
})

export const startLogout = () => {
    return async (dispatch) => {
        await auth.signOut()
        dispatch(logout())
    }
}

export const logout = () => ({
    type: types.logout
})