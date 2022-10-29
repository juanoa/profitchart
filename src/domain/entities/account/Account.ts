import {AccountTypes} from "./AccountTypes";
import AccountUpdate from "./AccountUpdate";

export type Account = {
  id: string;
  archived: boolean;
  color: string;
  currency: string;
  date: number;
  description: string;
  name: string;
  type: AccountTypes;
  updates: Array<AccountUpdate>
}

export const addUpdateToAccount = (account: Account, update: AccountUpdate): Account => {
  const updates = [...account.updates, update];
  return {...account, updates};
}