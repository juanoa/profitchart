import {routePaths} from "./routes";

const ID_TO_BE_REPLACED = ":id";

export const useRoutes = () => {
  return {
    accountPageRouteAssembler: (accountId: string): string =>
      routePaths.ACCOUNT_PAGE.replace(ID_TO_BE_REPLACED, accountId),
  }
}