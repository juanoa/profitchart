import {db, firstLevelCollection} from "../../../../config/firebase-config";
import {AccountFirebaseDto} from "../dto/account/AccountFirebaseDto";

const collection = `${firstLevelCollection}/accounts`

export function useAccountFirebaseDao() {

  async function findByUserIdOrderByDate(uid: string): Promise<Array<AccountFirebaseDto>> {
    const accounts: Array<AccountFirebaseDto> = []

    const accountsSnap = await db.collection(`${uid}/${collection}`)
      .orderBy('date', 'desc')
      .get();

    accountsSnap.forEach(snapChild => {
      accounts.push(<AccountFirebaseDto>{
        id: snapChild.id,
        ...snapChild.data()
      })
    })

    return accounts
  }

  async function create(account: AccountFirebaseDto, userId: string) {
    return await db.collection(`${userId}/${collection}`).doc(account.id).set(account)
  }

  async function update(userId: string, accountId: string, account: any) {
    return await db.doc(`${userId}/${collection}/${accountId}`).update(account)
  }

  async function remove(id: string, userId: string) {
    console.log(id)
    return await db.collection(`${userId}/${collection}`).doc(id).delete()
  }

  return {findByUserIdOrderByDate, create, update, remove}

}
