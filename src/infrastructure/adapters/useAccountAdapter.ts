import {useAccountFirebaseDao} from "../components/firebase-firestore/adapters/useAccountFirebaseDao";
import {AccountFirebaseDto} from "../components/firebase-firestore/dtos/AccountFirebaseDto";
import {useAccountFirebaseMapper} from "../components/firebase-firestore/mappers/useAccountFirebaseMapper";
import {Account} from "../../domain/entities/account/Account";

export const useAccountAdapter = () => {

  const {findByUser: findByUserInFirebase, findByUserAndById: findByUserAndByIdInFirebase, updateAccount: updateAccountInFirebase} = useAccountFirebaseDao();

  const {map: mapAccountFromFirebase, reverse: reverseAccountFromFirebase} = useAccountFirebaseMapper();

  return {
    findByUser: async (uid: string): Promise<Array<Account>> => {
      const accountsDto: Array<AccountFirebaseDto> = await findByUserInFirebase(uid);
      return accountsDto.map(accountDto => mapAccountFromFirebase(accountDto));
    },

    findByIdAndByUserId: async (id: string, uid: string): Promise<Account> => {
      const accountDto: AccountFirebaseDto = await findByUserAndByIdInFirebase(id, uid);
      if (!accountDto) {
        throw new Error("Account not found");
      }
      return mapAccountFromFirebase(accountDto);
    },

    update: async (uid: string, account: Account): Promise<void> => {
      const accountDto = reverseAccountFromFirebase(account);
      return await updateAccountInFirebase(account.id, uid, accountDto);
    }
  }
}