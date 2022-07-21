import {signInWithEmailAndPassword, UserCredential} from "firebase/auth";
import {auth} from "../../../../config/firebase-config";

export const useAuthenticationFirebase = () => {
  return {
    login: (email: string, password: string): Promise<UserCredential> => {
      return signInWithEmailAndPassword(auth, email, password);
    }
  }
}