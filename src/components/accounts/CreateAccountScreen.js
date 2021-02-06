import React from 'react';
import {NavLink, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Header} from "../Header";
import {useForm} from "../../hooks/useForm";
import {startCreateAccount} from "../../actions/accounts";

export const CreateAccountScreen = () => {

    const dispatch = useDispatch()
    const {loading} = useSelector (state => state.ui)

    const [formValues, handleInputChanges] = useForm({
        name: '',
        type: '',
        description: '',
        color: '',
        currency: ''
    })

    const {name, type, description, color, currency} = formValues

    const handleForm = (e) => {
        e.preventDefault()
        dispatch(startCreateAccount(name, type, description, color, currency))
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
                        <input
                            name="type"
                            type="text"
                            className="input"
                            value={type}
                            onChange={handleInputChanges}
                        />
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
                        <input
                            name="color"
                            type="text"
                            className="input"
                            value={color}
                            onChange={handleInputChanges}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="label">Currency</label>
                        <input
                            name="currency"
                            type="text"
                            className="input"
                            value={currency}
                            onChange={handleInputChanges}
                        />
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