import {types} from "../types/types";

const initialState = {
    loading: false,
    msgToast: null,
    typeToast: null
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type){
        case types.uiSetToast:
            return {
                ...state,
                msgToast: action.payload.msgToast,
                typeToast: action.payload.typeToast
            }

        case types.uiRemoveToast:
            return {
                ...state,
                msgToast: null,
                typeToast: null
            }

        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }

        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
};