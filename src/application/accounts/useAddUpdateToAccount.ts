import {UseCase} from "../../domain/entities/UseCase";
import {Account, addUpdateToAccount} from "../../domain/entities/account/Account";
import AccountUpdate from "../../domain/entities/account/AccountUpdate";
import {useAccountAdapter} from "../../infrastructure/adapters/useAccountAdapter";

export const useAddUpdateToAccount = (): UseCase<Promise<Account>> => {

  const { update: updateAccount } = useAccountAdapter();

  return async (uid: string, account: Account, update: AccountUpdate): Promise<Account> => {
    const newAccount: Account = addUpdateToAccount(account, update);
    await updateAccount(uid, newAccount);
    return newAccount;
  }
}