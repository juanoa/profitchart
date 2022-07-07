import {Account} from "../entities/account/Account";
import {Optional} from "../entities/Optional";

export interface AccountRepository {
  findByUser: (uid: string) => Array<Account>,

  findByUserAndById: (uid: string, id: string) => Optional<Account>,
}