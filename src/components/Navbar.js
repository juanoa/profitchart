import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import logo from '../logo.png'
import {startLogout} from "../actions/auth";
const pjson = require('../../package.json')

export const Navbar = () => {

    const dispatch = useDispatch()
    const {email} = useSelector (state => state.auth)

    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <div className="navbar__sidebar">
            <div className="navbar__logo">
                <Link to="/" aria-label="Home page">
                    <img src={logo} alt={logo}/>
                </Link>
            </div>
            <div className="navbar__email">
                {email}
            </div>
            <NavLink
                activeClassName="active"
                className="navbar__link"
                exact
                to="/"
            >
                Dashboard
            </NavLink>

            <NavLink
                activeClassName="active"
                className="navbar__link"
                to="/accounts"
            >
                Accounts
            </NavLink>

            <NavLink
                activeClassName="active"
                className="navbar__link"
                to="/configuration"
            >
                Configuration
            </NavLink>
            <span
                className="navbar__logout"
                onClick={handleLogout}
            >
                Logout
            </span>
            <span
                className="navbar__version"
            >
                {pjson.name} - v{pjson.version}
            </span>
        </div>
    );
};