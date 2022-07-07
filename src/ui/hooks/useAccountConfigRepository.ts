import {Optional} from "../../domain/entities/Optional";
import {accountTypes} from "../../config/data/account-config";
import {AccountType} from "../../domain/entities/account/AccountType";

export function useAccountConfigRepository() {
  function getAccountTypeById(id: string): Optional<AccountType> {
    return accountTypes.find(accountType => accountType.id === id);
  }

  return {getAccountTypeById}
}