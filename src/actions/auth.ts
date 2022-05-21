import {types} from "../reducers/types";
import {auth} from "../config/firebase-config";
import {finishLoading, setToast, startLoading} from "./ui";

export const startLoginEmailPassword = (email: string, password: string) => {
    return (dispatch: any) => {
        dispatch(startLoading())
        auth.signInWithEmailAndPassword(email, password)
            .then( ({user}) => {
                dispatch(login(user?.uid, user?.email))
            })
            .catch(() => {
                // dispatch(setToast('User or password are wrong', 'error'))
            })
            .finally(() => {
                dispatch(finishLoading())
            })
    }
}

export const login = (uid: any, email: any) => ({
    type: types.login,
    payload: {
        uid,
        email
    }
})

export const startLogout = () => {
    return async (dispatch: any) => {
        await auth.signOut()
        dispatch(logout())
    }
}

export const logout = () => ({
    type: types.logout
})