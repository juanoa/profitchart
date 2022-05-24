import {AccountUpdateFirebaseDto} from "./AccountUpdateFirebaseDto";

export interface AccountFirebaseDto {
  id: string;
  archived: boolean;
  color: string;
  currency: string;
  date: number;
  description: string;
  name: string;
  type: string;
  updates: Array<AccountUpdateFirebaseDto>
}