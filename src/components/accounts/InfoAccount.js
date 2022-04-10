import React from 'react'
import {useDispatch} from "react-redux";
import {startUpdateAccount} from "../../actions/accounts";

export const InfoAccount = ({account}) => {

    const {type, currency, date, archived} = account

    const dispatch = useDispatch()

    const archivedAccount = () => {
        account.archived = true
        dispatch(startUpdateAccount(account))
    }

    const activatedAccount = () => {
        account.archived = false
        dispatch(startUpdateAccount(account))
    }

    return (
        <div className="card mb-4">
            <div className="row">
                <div className="col-md-9">
                    <p>{type}</p>
                    <p>{currency}</p>
                    <p>{new Date(date).toDateString()}</p>
                </div>
                <div className="col-md-3 align-right">
                    {
                        !archived
                            ? <div className="btn btn-success" onClick={archivedAccount}>Active</div>
                            : <div className="btn btn-danger" onClick={activatedAccount}>Archived</div>
                    }
                </div>
            </div>
        </div>

    )
}