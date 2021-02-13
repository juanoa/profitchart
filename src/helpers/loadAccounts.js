import {db} from "../config/firebase-config";

export const loadAcconts = async (uid) => {
    const accountsSnap = await db.collection(`${uid}/profitchart/accounts`).orderBy('date', 'desc').get()
    const accounts = []

    accountsSnap.forEach(snapChild => {
        accounts.push({
            id: snapChild.id,
            ...snapChild.data()
        })
    })
    return accounts
}