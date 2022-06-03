import {Optional} from "../interfaces/Optional";
import {accountTypes} from "../config/data/account-config";
import {AccountType} from "../interfaces/account/AccountType";

export function useAccountConfigRepository() {
  function getAccountTypeById(id: string): Optional<AccountType> {
    return accountTypes.find(accountType => accountType.id === id);
  }

  return {getAccountTypeById}
}