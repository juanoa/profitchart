import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import {Header} from "../Header";
import {InfoAccount} from "./InfoAccount";
import {UpdatesAccount} from "./UpdatesAccount";
import {HistoricalAccount} from "./HistoricalAccount";
import {CreateUpdate} from "./CreateUpdate";


export const AccountScreen = () => {

    const {accounts} = useSelector(state => state.accounts)

    const {id} = useParams()

    const account = accounts.find(function (a) {
        return a.id === id
    })
    const {name, description} = account

    return (
        <>
            <Header title={`ℹ️ ${name}`}/>
            <p>{description}</p>

            <h2>Info</h2>
            <InfoAccount account={account} />
            <HistoricalAccount account={account} />

            <h2>Updates</h2>
            <CreateUpdate account={account} />
            <UpdatesAccount account={account} />
        </>
    );
};