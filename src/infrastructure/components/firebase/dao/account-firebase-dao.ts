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
    return await db.collection(`${userId}/${collection}`).add(account)
  }

  async function update(userId: string, accountId: string, account: any) {
    return await db.doc(`${userId}/${collection}/${accountId}`).update(account)
  }

  return {findByUserIdOrderByDate, create, update}

}
