import {db, firstLevelCollection} from "../../../../config/firebase-config";
import {AccountFirebaseDto} from "../dto/AccountFirebaseDto";

export const useAccountFirebaseDao = () => {

  const collection = `${firstLevelCollection}/accounts`

  return {
    findByUser: async (uid: string): Promise<Array<AccountFirebaseDto>> => {
      const accountsSnap = await db.collection(`${uid}/${collection}`)
        .orderBy('date', 'desc')
        .get()
      const accounts: Array<any> = []

      accountsSnap.forEach(snapChild => {
        accounts.push({
          id: snapChild.id,
          ...snapChild.data()
        })
      })
      return accounts
    },

    findByUserAndById: async (id: string, uid: string): Promise<AccountFirebaseDto> => {
      const accountSnap = await db.collection(`${uid}/${collection}`)
        .doc(id)
        .get()
      let account: any = {
        id: accountSnap.id,
        ...accountSnap.data()
      }
      return account;
    }
  }
}