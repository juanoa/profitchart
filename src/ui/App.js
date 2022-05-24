import React from 'react'
import {Provider} from 'react-redux'

import {AppRouter} from "./router/AppRouter";
import {store} from "../infrastructure/components/redux/store/store";

import './styles/styles.scss'

export const App = () => {
    return (
        <>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </>
    );
}