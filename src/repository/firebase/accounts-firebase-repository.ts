import {db, firstLevelCollection} from "../../config/firebase-config";

const collection = `${firstLevelCollection}/accounts`

export const getAllOrderByDate = async (uid: string) => {
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
}

export const create = async (userId: string, account: any) => {
  return await db.collection(`${userId}/${collection}`).add(account)
}

export const update = async (userId: string, accountId: string, account: any) => {
  return await db.doc(`${userId}/${collection}/${accountId}`).update(account)
}
