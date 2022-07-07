import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {LoginPage} from "../pages/auth/LoginPage";
import {DashboardRouter} from "./DashboardRouter";
import {Toast} from "../layout/Toast";
import {auth} from "../../config/firebase-config";
import {login} from "../actions/auth";
import {Loading} from "../layout/Loading";
import {PrivateRoute} from "./PrivateRoute";
import {PublicRoute} from "./PublicRoute";
import {startLoadingAccounts} from "../actions/accounts";
import {useAppDispatch} from "../store/store";
import {useGetAccountsByUser} from "../../application/accounts/useGetAccountsByUser";

export const AppRouter = () => {

    const dispatch = useAppDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user?.uid){
                dispatch(login(user.uid, user.email))
                setIsLoggedIn(true)

                // @ts-ignore
                dispatch(startLoadingAccounts(user.uid)).then(() => setChecking(false))
            } else {
                setIsLoggedIn(false)
                setChecking(false)
            }
        })
    }, [dispatch, setChecking, setIsLoggedIn]);


    // @ts-ignore
    const {msgToast, typeToast} = useSelector(state => state.ui)

    if (checking){
        return (
            <Loading />
        )
    }

    return (
        <Router>
            <div>
                {
                    msgToast &&
                    <Toast type={typeToast} msg={msgToast} />
                }
                <Switch>
                    <PublicRoute
                        exact
                        path='/login'
                        component={LoginPage}
                        isAuthenticated={isLoggedIn}
                    />
                    <PrivateRoute
                        path='/'
                        component={DashboardRouter}
                        isAuthenticated={isLoggedIn}
                    />
                </Switch>
            </div>
        </Router>
    );
};