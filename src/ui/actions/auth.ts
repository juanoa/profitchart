import {types} from "../reducers/types";
import {auth} from "../../config/firebase-config";

export const startLogout = () => {
    return async (dispatch: any) => {
        await auth.signOut()
        dispatch(logout())
    }
}

export const logout = () => ({
    type: types.logout
})