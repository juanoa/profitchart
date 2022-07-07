import React from 'react'
import {Provider} from 'react-redux'

import {AppRouter} from "./ui/router/AppRouter";
import {store} from "./ui/store/store";

import './ui/styles/styles.scss'

export const App = () => {
    return (
        <>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </>
    );
}