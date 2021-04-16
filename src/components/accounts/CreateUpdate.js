import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "../../hooks/useForm";
import {startCreateUpdate} from "../../actions/accounts";

export const CreateUpdate = ({account}) => {

    const dispatch = useDispatch()
    const {loading} = useSelector (state => state.ui)

    const {currency} = account

    const [formValues, handleInputChanges] = useForm({
        year: '',
        month: '',
        value: ''
    })
    const {year, month, value} = formValues

    const handleForm = (e) => {
        e.preventDefault()
        dispatch(startCreateUpdate(account, year, month, value))
    }

    return (
        <div className="card mb-4">
            <form onSubmit={handleForm}>
                <h3>New update</h3>
                <div className="row">
                    <div className="col-md-4">
                        <label>Year</label>
                        <input
                            className="input"
                            autoComplete="off"
                            type="text"
                            name="year"
                            value={year}
                            onChange={handleInputChanges}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <label>Month</label>
                        <input
                            className="input"
                            autoComplete="off"
                            type="text"
                            name="month"
                            value={month}
                            onChange={handleInputChanges}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <label>Value</label>
                        <input
                            className="input"
                            autoComplete="off"
                            type="text"
                            name="value"
                            placeholder={currency}
                            value={value}
                            onChange={handleInputChanges}
                            required
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-success btn-lg mt-3"
                    disabled={loading}
                >
                    Save
                </button>
            </form>
        </div>
    )
}