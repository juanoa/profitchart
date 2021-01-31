import React from 'react';
import {Link, NavLink} from "react-router-dom";

import logo from '../logo.png'

export const Navbar = () => {
    return (
        <div className="navbar__sidebar">
            <div className="navbar__logo">
                <Link to="/" aria-label="Home page">
                    <img src={logo} alt={logo}/>
                </Link>
            </div>
            <NavLink
                activeClassName="active"
                className="navbar__link"
                exact
                to="/"
            >
                Home
            </NavLink>

            <NavLink
                activeClassName="active"
                className="navbar__link"
                exact
                to="/accounts"
            >
                Accounts
            </NavLink>

            <NavLink
                activeClassName="active"
                className="navbar__link"
                exact
                to="/configuration"
            >
                Configuration
            </NavLink>
        </div>
    );
};