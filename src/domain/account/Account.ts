import {AccountType} from "./AccountType";
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
  type: AccountType;
  updates: Array<AccountUpdate>
}