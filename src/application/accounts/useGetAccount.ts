import {UseCase} from "../../domain/entities/UseCase";
import {Account} from "../../domain/entities/account/Account";
import {useAccountRepository} from "../../infrastructure/repositories/useAccountRepository";
import {Optional} from "../../domain/entities/Optional";

export const useGetAccount = (): UseCase<Promise<Optional<Account>>> => {

  const {findByIdAndByUserId} = useAccountRepository();

  return async (accountId: string, uid: string) => {
    return await findByIdAndByUserId(accountId, uid);
  }
}