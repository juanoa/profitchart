import {types} from "../reducers/types";

export const setToast = (msg, type) => ({
    type: types.uiSetToast,
    payload: {
        msgToast: msg,
        typeToast: type
    }
})

export const removeToast = () => ({
    type: types.uiRemoveToast
})

export const startLoading = () => ({
    type: types.uiStartLoading
})

export const finishLoading = () => ({
    type: types.uiFinishLoading
})