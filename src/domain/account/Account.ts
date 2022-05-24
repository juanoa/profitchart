import {AccountTypes} from "./AccountTypes";
import {AccountUpdate} from "./AccountUpdate";
import {Identifier} from "../Identifier";

export interface Account {
  id: Identifier;
  archived: boolean;
  color: string;
  currency: string;
  date: Date;
  description: string;
  name: string;
  type: AccountTypes;
  updates: Array<AccountUpdate>
}