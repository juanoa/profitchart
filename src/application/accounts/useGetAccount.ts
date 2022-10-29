import {UseCase} from "../../domain/entities/UseCase";
import {Account} from "../../domain/entities/account/Account";
import {useAccountAdapter} from "../../infrastructure/adapters/useAccountAdapter";

export const useGetAccount = (): UseCase<Promise<Account>> => {

  const {findByIdAndByUserId} = useAccountAdapter();

  return async (accountId: string, uid: string) => {
    return await findByIdAndByUserId(accountId, uid);
  }
}