import {AccountTypes} from "./AccountTypes";
import {AccountUpdate} from "./AccountUpdate";

export interface Account {
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