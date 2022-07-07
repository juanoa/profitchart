import React from "react";
import {HomePage} from "../pages/dashboard/HomePage";
import {AccountsPage} from "../pages/accounts/AccountsPage";
import {CreateAccountPage} from "../pages/accounts/CreateAccountPage";
import {AccountPage} from "../pages/accounts/AccountPage";
import {ConfigurationPage} from "../pages/configuration/ConfigurationPage";

export const routes: Array<{path: string; PageComponent: React.ComponentType}> = [
  {
    path: "/",
    PageComponent: HomePage
  },
  {
    path: "/accounts",
    PageComponent: AccountsPage
  },
  {
    path: "/accounts/create",
    PageComponent: CreateAccountPage
  },
  {
    path: "/accounts/:id",
    PageComponent: AccountPage
  },
  {
    path: "/configuration",
    PageComponent: ConfigurationPage
  },
]