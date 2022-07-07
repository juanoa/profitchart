import {db, firstLevelCollection} from "../../../../config/firebase-config";
import {AccountFirebaseDto} from "../dto/AccountFirebaseDto";

export const useAccountFirebaseDao = () => {

  const collection = `${firstLevelCollection}/accounts`

  return {
    findByUser: (uid: string): Array<AccountFirebaseDto> => {
      const accounts: Array<any> = []
      db.collection(`${uid}/${collection}`)
        .orderBy('date', 'desc')
        .get()
        .then(accountsSnapshot => {
          accountsSnapshot.forEach(snapChild => {
            accounts.push({
              id: snapChild.id,
              ...snapChild.data()
            })
          })
        })

      return accounts
    }
  }
}