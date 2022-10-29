import {AccountTypes} from "./AccountTypes";
import AccountUpdate from "./AccountUpdate";
import AccountUpdateDate, {areAccountUpdateDatesEquals} from "./AccountUpdateDate";

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

export const deleteUpdateByAccountUpdateDate = (account: Account, updateDate: AccountUpdateDate): Account => {
  return {
    ...account,
    updates: account.updates.filter(({date}) => !areAccountUpdateDatesEquals(date, updateDate)),
  }
}