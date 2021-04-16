import React from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Header} from "../Header";
import {useForm} from "../../hooks/useForm";
import {startCreateAccount} from "../../actions/accounts";

export const CreateAccountScreen = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const {loading} = useSelector (state => state.ui)

    const [formValues, handleInputChanges] = useForm({
        name: '',
        type: 'savings',
        description: '',
        color: '#ff695d',
        currency: 'EUR'
    })

    const {name, type, description, color, currency} = formValues

    const handleForm = (e) => {
        e.preventDefault()
        dispatch(startCreateAccount(name, type, description, color, currency))
        history.push('/accounts')
    }

    return (
        <>
            <Header title="➕ Create Account" />
            <form className="card" onSubmit={handleForm}>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <label className="label">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input"
                            autoComplete="off"
                            value={name}
                            onChange={handleInputChanges}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="label">Type</label>
                        <select
                            name="type"
                            value={type}
                            onChange={handleInputChanges}
                            className="input-select"
                        >
                            <option value="savings">Savings</option>
                            <option value="investment">Investment</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <label className="label">Description</label>
                <textarea
                    name="description"
                    className="text-area"
                    value={description}
                    onChange={handleInputChanges}
                />
                <div className="row mt-4 mb-4">
                    <div className="col-md-6">
                        <label className="label">Color</label>
                        <select
                            name="color"
                            value={color}
                            onChange={handleInputChanges}
                            className="input-select"
                        >
                            <option value="#ff695d">Red</option>
                            <option value="#ffbe44">Yellow</option>
                            <option value="#08c15c">Green</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="label">Currency</label>
                        <select
                            name="currency"
                            value={currency}
                            onChange={handleInputChanges}
                            className="input-select"
                        >
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </div>
                </div>

                <NavLink
                    exact
                    to="/accounts"
                >
                    <div className="btn btn-danger btn-lg">
                        Cancel
                    </div>
                </NavLink>
                <button
                    type="submit"
                    className="btn btn-success btn-lg ml-2"
                    disabled={loading}
                >
                    Save
                </button>
            </form>
        </>
    );
};