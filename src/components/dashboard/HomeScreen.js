import React from 'react';

import {Header} from "../Header";
import {MainChart} from "./MainChart";

export const HomeScreen = () => {

    return (
        <>
            <Header title="🏠 Dashboard" />

            <MainChart />
        </>
    );
};