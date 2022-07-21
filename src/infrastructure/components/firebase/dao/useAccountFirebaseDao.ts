import {collection, doc, getDoc, getDocs, orderBy, query} from 'firebase/firestore/lite';
import {db, firstLevelCollection} from "../../../../config/firebase-config";
import {AccountFirebaseDto} from "../dto/AccountFirebaseDto";

export const useAccountFirebaseDao = () => {

  const collectionName = `${firstLevelCollection}/accounts`

  return {
    findByUser: async (uid: string): Promise<Array<AccountFirebaseDto>> => {
      const collectionRef = collection(db, `${uid}/${collectionName}`);
      const queryRef = query(collectionRef, orderBy('date', 'desc'))
      const accountsSnap = await getDocs(queryRef);

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
      const docRef = doc(db, `${uid}/${collectionName}`, id);
      const accountSnap = await getDoc(docRef);

      let account: any = {
        id: accountSnap.id,
        ...accountSnap.data()
      }
      return account;
    }
  }
}