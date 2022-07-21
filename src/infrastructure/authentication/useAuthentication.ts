import {useAuthenticationFirebase} from "../components/firebase/authentication/useAuthenticationFirebase";
import {UserCredential} from "firebase/auth";

export const useAuthentication = () => {

  const {login: loginInFirebase} = useAuthenticationFirebase();

  return {
    login: (email: string, password: string): Promise<UserCredential> => {
      return loginInFirebase(email, password);
    }
  }
}