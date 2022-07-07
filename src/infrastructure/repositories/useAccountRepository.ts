import {AccountRepository} from "../../domain/repositories/AccountRepository";
import {useAccountFirebaseDao} from "../components/firebase/dao/useAccountFirebaseDao";
import {AccountFirebaseDto} from "../components/firebase/dto/AccountFirebaseDto";
import {useAccountFirebaseMapper} from "../components/firebase/mappers/useAccountFirebaseMapper";
import {Account} from "../../domain/entities/account/Account";

export const useAccountRepository = (): AccountRepository => {

  const {findByUser: findByUserInFirebase} = useAccountFirebaseDao();

  const {map: mapAccountFromFirebase} = useAccountFirebaseMapper();

  return {
    findByUser: (uid: string): Array<Account> => {
      const accountsDto: Array<AccountFirebaseDto> = findByUserInFirebase(uid);
      return accountsDto.map(accountDto => mapAccountFromFirebase(accountDto));
    },

    findByUserAndById: (uid: string, id: string) => undefined,
  }
}