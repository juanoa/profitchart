import {db, firstLevelCollection} from "../../../../config/firebase-config";
import {AccountFirebaseDto} from "../dto/account/AccountFirebaseDto";

const collection = `${firstLevelCollection}/accounts`

export function useAccountFirebaseDao() {

  function findByUserIdOrderByDate(uid: string): Array<AccountFirebaseDto>{
    const accounts: Array<AccountFirebaseDto> = []

    db.collection(`${uid}/${collection}`)
      .orderBy('date', 'desc')
      .get()
      .then(accountsSnap => {
        accountsSnap.forEach(snapChild => {
          accounts.push(<AccountFirebaseDto>{
            id: snapChild.id,
            ...snapChild.data()
          })
        })
      })

    return accounts
  }

  async function create(account: AccountFirebaseDto, userId: string) {
    return await db.collection(`${userId}/${collection}`).add(account)
  }

  async function update(userId: string, accountId: string, account: any) {
    return await db.doc(`${userId}/${collection}/${accountId}`).update(account)
  }

  return {findByUserIdOrderByDate, create, update}

}
