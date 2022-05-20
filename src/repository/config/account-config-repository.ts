import {accountTypes} from "../../config/data/account-config";
import {AccountType} from "../../domain/account/AccountType";
import {Optional} from "../../domain/Optional";

export const getAccountTypeById: ((id: string) => Optional<AccountType>) = (id) => {
  return accountTypes.find(accountType => accountType.id === id)
};