import {Account} from "../entities/account/Account";
import {Optional} from "../entities/Optional";

export interface AccountRepository {
  findByUser: (uid: string) => Promise<Array<Account>>,

  findByIdAndByUserId: (id: string, uid: string) => Promise<Optional<Account>>,
}