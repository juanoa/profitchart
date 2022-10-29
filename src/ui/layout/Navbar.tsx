import React, {useEffect, useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import {useLogout} from "../../application";
import {useAuthenticationContext} from "../contexts/AuthenticationContext";
// @ts-ignore
import logo from "../../logo.png";
import {routePaths} from "../router/routes";
import {useGetNetProfit} from "../../application/accounts/useGetNetProfit";
import {convertToLegibleNumber} from "../helpers/number-helpers";

const packageJson = require('../../../package.json')

export const Navbar = () => {

  const [netProfit, setNetProfit] = useState<Number>(0);

  const logout = useLogout();
  const getNetProfit = useGetNetProfit();

  const {user} = useAuthenticationContext();

  useEffect(() => {
    getNetProfit(user?.uid)
      .then(netProfit => setNetProfit(netProfit));
  }, []);


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
        <span>{user?.email}</span>
      </div>
      <div className={"navbar__netProfit"}>
        <div className="tag tag-lg tag-primary">{convertToLegibleNumber(netProfit)}€</div>
      </div>
      <div className="navbar__links">
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
      </div>
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