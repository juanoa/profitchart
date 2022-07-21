import {useAuthenticationFirebase} from "../components/firebase/authentication/useAuthenticationFirebase";
import {UserCredential} from "firebase/auth";

export const useAuthentication = () => {

  const {login: loginInFirebase, logout: logoutInFirebase} = useAuthenticationFirebase();

  return {
    login: (email: string, password: string): Promise<UserCredential> => {
      return loginInFirebase(email, password);
    },
    logout: (): Promise<void> => {
      return logoutInFirebase();
    }
  }
}