import React from 'react';
import {Header} from "../Header";

export const AccountsScreen = () => {
    return (
        <>
            <Header title="👛 Accounts" />

            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="row">
                            <div className="col-4">
                                <p>Foto</p>
                            </div>
                            <div className="col-8">
                                <h3>Cuenta 23</h3>
                                <p>Hola que tal</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="row">
                            <div className="col-4">
                                <p>Foto</p>
                            </div>
                            <div className="col-8">
                                <h3>Cuenta 23</h3>
                                <p>Hola que tal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};