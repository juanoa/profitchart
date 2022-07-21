import {routePaths} from "./routes";

export const useRoutes = () => {
  return {
    accountPageRouteAssembler: (accountId: string): string => routePaths.ACCOUNT_PAGE.replace(":id", accountId),
  }
}