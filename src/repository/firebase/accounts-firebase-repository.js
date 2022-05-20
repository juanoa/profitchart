import {db, firstLevelCollection} from "../../config/firebase-config";

const collection = `${firstLevelCollection}/accounts`

export const getAllOrderByDate = async (uid) => {
  const accountsSnap = await db.collection(`${uid}/${collection}`)
    .orderBy('date', 'desc')
    .get()
  const accounts = []

  accountsSnap.forEach(snapChild => {
    accounts.push({
      id: snapChild.id,
      ...snapChild.data()
    })
  })
  return accounts
}

export const create = async (userId, account) => {
  return await db.collection(`${userId}/${collection}`).add(account)
}

export const update = async (userId, accountId, account) => {
  return await db.doc(`${userId}/${collection}/${accountId}`).update(account)
}
