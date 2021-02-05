import React from 'react';
import {Header} from "../Header";
import {NavLink} from "react-router-dom";

export const CreateAccountScreen = () => {
    return (
        <>
            <Header title="➕ Create Account" />
            <form className="card">

                <div className="row mb-4">
                    <div className="col-md-6">
                        <label className="label">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input"
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="label">Type</label>
                        <input
                            name="type"
                            type="text"
                            className="input"
                        />
                    </div>
                </div>
                <label className="label">Description</label>
                <textarea
                    name="description"
                    className="text-area"
                />
                <div className="row mt-4 mb-4">
                    <div className="col-md-6">
                        <label className="label">Color</label>
                        <input
                            name="color"
                            type="text"
                            className="input"
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="label">Currency</label>
                        <input
                            name="currency"
                            type="text"
                            className="input"
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
                <NavLink
                    exact
                    to="/accounts"
                >
                    <div className="btn btn-success btn-lg ml-2">
                        Save
                    </div>
                </NavLink>
            </form>
        </>
    );
};