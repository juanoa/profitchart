import {types} from "../types/types";


const initialState = {
    accounts: []
}

export const accountsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.accountsLoad:
            return {
                ...state,
                accounts: [...action.payload]
            }

        case types.accountsAddNew:
            return {
                ...state,
                accounts: [action.payload, ...state.accounts]
            }

        default:
            return state
    }
}