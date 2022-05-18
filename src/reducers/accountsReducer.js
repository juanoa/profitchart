import {types} from "./types";


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

        case types.accountsUpdated:
            return {
                ...state,
                accounts: state.accounts.map(
                    account => account.id === action.payload.id
                        ? action.payload.account
                        : account
                )
            }

        default:
            return state
    }
}