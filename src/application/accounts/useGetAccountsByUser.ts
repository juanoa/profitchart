import {UseCase} from "../../domain/entities/UseCase";
import {Account} from "../../domain/entities/account/Account";
import {useAccountAdapter} from "../../infrastructure/adapters/useAccountAdapter";

export const useGetAccountsByUser = (): UseCase<Promise<Array<Account>>> => {

  const {findByUser} = useAccountAdapter();

  return async (uid: string) => {
    return await findByUser(uid)
  }
}