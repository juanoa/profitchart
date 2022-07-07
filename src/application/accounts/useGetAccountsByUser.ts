import {UseCase} from "../../domain/entities/UseCase";
import {Account} from "../../domain/entities/account/Account";
import {useAccountRepository} from "../../infrastructure/repositories/useAccountRepository";

export const useGetAccountsByUser = (): UseCase<Promise<Array<Account>>> => {

  const {findByUser} = useAccountRepository();

  return async (uid: string) => {
    return await findByUser(uid)
  }
}