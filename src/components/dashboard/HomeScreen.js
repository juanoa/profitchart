import React from 'react';

import {Header} from "../Header";
import {MainChart} from "./MainChart";
import {AccountsDoughnutChart} from "./AccountsDoughnutChart";

export const HomeScreen = () => {

    return (
        <>
            <Header title="🏠 Dashboard" />

            <MainChart />
            <div className="row mt-5">
                <div className="col-md-6">
                    <AccountsDoughnutChart />
                </div>
                <div className="col-md-6">
                    <AccountsDoughnutChart />
                </div>
            </div>
        </>
    );
};