import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { useSelector} from "react-redux";

import {LoginPage} from "../pages/auth/LoginPage";
import {DashboardRouter} from "./DashboardRouter";
import {Toast} from "../layout/Toast";
import {auth} from "../../config/firebase-config";
import {login} from "../../infrastructure/components/redux/actions/auth";
import {Loading} from "../layout/Loading";
import {PrivateRoute} from "./PrivateRoute";
import {PublicRoute} from "./PublicRoute";
import {useAppDispatch} from "../../infrastructure/components/redux/store/store";
import {useLoadAccounts} from "../../application/usecases/account/load-accounts";

export const AppRouter = () => {

    const dispatch = useAppDispatch();
    const loadAccounts = useLoadAccounts();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user?.uid){
                dispatch(login(user.uid, user.email))
                setIsLoggedIn(true)
                loadAccounts(user.uid)
                setChecking(false)
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