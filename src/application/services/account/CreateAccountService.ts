import {Account} from "../../../domain/account/Account";
import {createId} from "../../../domain/Identifier";
import {AccountType} from "../../../domain/account/AccountType";

export function useCreateAccountService() {
  return function (name: string, description: string, color: string, currency: string, type: string): Account {
    return {
      id: createId(),
      name,
      description,
      type: type as AccountType,
      currency,
      color,
      date: new Date(),
      updates: [],
      archived: false
    };
  }
}