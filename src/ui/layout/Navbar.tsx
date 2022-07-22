import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useLogout} from "../../application";
import {useAuthenticationContext} from "../contexts/AuthenticationContext";
// @ts-ignore
import logo from "../../logo.png";
import {routePaths} from "../router/routes";

const packageJson = require('../../../package.json')

export const Navbar = () => {

  const logout = useLogout();

  const {user} = useAuthenticationContext();

  const handleLogout = () => {
    logout().then();
  }

  return (
    <div className="navbar__sidebar">
      <div className="navbar__logo">
        <Link to={routePaths.HOME_PAGE} aria-label="Home page">
          <img src={logo} alt={logo}/>
        </Link>
      </div>
      <div className="navbar__email">
        {user?.email}
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
      <span className="navbar__version">
        {packageJson.name} - v{packageJson.version}
      </span>
    </div>
  );
};