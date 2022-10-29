import React from "react";
import {HomePage} from "../pages/dashboard/HomePage";
import {AccountListPage} from "../pages/accounts/AccountListPage";
import {CreateAccountPage} from "../pages/accounts/CreateAccountPage";
import {AccountPage} from "../pages/accounts/AccountPage";
import {ConfigurationPage} from "../pages/configuration/ConfigurationPage";

export const routePaths: any = {
  HOME_PAGE: "/",
  ACCOUNTS_LIST_PAGE: "/accounts",
  CREATE_ACCOUNT_PAGE: "/accounts/create",
  ACCOUNT_PAGE: "/accounts/:id",
  CONFIGURATION_PAGE: "/configuration",
}

export const routes: Array<{ path: string; PageComponent: React.ComponentType }> = [
  {
    path: routePaths.HOME_PAGE,
    PageComponent: HomePage
  },
  {
    path: routePaths.ACCOUNTS_LIST_PAGE,
    PageComponent: AccountListPage
  },
  {
    path: routePaths.CREATE_ACCOUNT_PAGE,
    PageComponent: CreateAccountPage
  },
  {
    path: routePaths.ACCOUNT_PAGE,
    PageComponent: AccountPage
  },
  {
    path: routePaths.CONFIGURATION_PAGE,
    PageComponent: ConfigurationPage
  },
]