
import {types} from "./types";

export const authReducer = (state = {}, action: any) => {
    switch (action.type){
        case types.login:
            return {
                uid: action.payload.uid,
                email: action.payload.email
            }

        case types.logout:
            return {}

        default:
            return state
    }
};