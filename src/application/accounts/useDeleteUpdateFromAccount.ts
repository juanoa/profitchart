import {UseCase} from "../../domain/entities/UseCase";
import {Account, deleteUpdateByAccountUpdateDate} from "../../domain/entities/account/Account";
import {useAccountAdapter} from "../../infrastructure/adapters/useAccountAdapter";
import AccountUpdateDate from "../../domain/entities/account/AccountUpdateDate";

export const useDeleteUpdateFromAccount = (): UseCase<Promise<Account>> => {

  const {update: updateAccount} = useAccountAdapter();

  return async (uid: string, account: Account, updateDate: AccountUpdateDate): Promise<Account> => {
    const newAccount: Account = deleteUpdateByAccountUpdateDate(account, updateDate);
    await updateAccount(uid, newAccount);
    return newAccount;
  }
}