import {AccountRepository} from "../../domain/repositories/AccountRepository";
import {useAccountFirebaseDao} from "../components/firebase-firestore/adapters/useAccountFirebaseDao";
import {AccountFirebaseDto} from "../components/firebase-firestore/dtos/AccountFirebaseDto";
import {useAccountFirebaseMapper} from "../components/firebase-firestore/mappers/useAccountFirebaseMapper";
import {Account} from "../../domain/entities/account/Account";
import {Optional} from "../../domain/entities/Optional";

export const useAccountRepository = (): AccountRepository => {

  const {findByUser: findByUserInFirebase, findByUserAndById: findByUserAndByIdInFirebase} = useAccountFirebaseDao();

  const {map: mapAccountFromFirebase} = useAccountFirebaseMapper();

  return {
    findByUser: async (uid: string): Promise<Array<Account>> => {
      const accountsDto: Array<AccountFirebaseDto> = await findByUserInFirebase(uid);
      return accountsDto.map(accountDto => mapAccountFromFirebase(accountDto));
    },

    findByIdAndByUserId: async (id: string, uid: string): Promise<Optional<Account>> => {
      const accountDto: AccountFirebaseDto = await findByUserAndByIdInFirebase(id, uid);
      return mapAccountFromFirebase(accountDto);
    }
  }
}