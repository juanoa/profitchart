import {UseCase} from "../../domain/entities/UseCase";
import {Account} from "../../domain/entities/account/Account";
import {useAccountRepository} from "../../infrastructure/repositories/useAccountRepository";

export const useGetAccountsByUser = (): UseCase<Array<Account>> => {

  const {findByUser} = useAccountRepository();

  return (uid: string) => {
    const userAccounts: Array<Account> = findByUser(uid)
    return userAccounts;
  }
}