import {Account} from "../entities/account/Account";
import {Optional} from "../entities/Optional";

export interface AccountRepository {
  findByUser: (uid: string) => Promise<Array<Account>>,

  findByUserAndById: (uid: string, id: string) => Optional<Account>,
}