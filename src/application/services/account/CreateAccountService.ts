import {Account} from "../../../domain/account/Account";
import {createId} from "../../../domain/Identifier";
import {AccountTypes} from "../../../domain/account/AccountTypes";

export function useCreateAccountService() {
  return function (name: string, description: string, color: string, currency: string, type: string): Account {
    return {
      id: createId(),
      name,
      description,
      type: type as AccountTypes,
      currency,
      color,
      date: new Date(),
      updates: [],
      archived: false
    };
  }
}