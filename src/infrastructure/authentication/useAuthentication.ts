import {useAuthenticationFirebaseClient} from "../components/firebase-auth/adapters/useAuthenticationFirebaseClient";
import {UserCredential} from "firebase/auth";
import {Optional} from "../../domain/entities/Optional";
import {User} from "../../domain/entities/authentication/User";
import {useAuthenticationFirebaseMapper} from "../components/firebase-auth/mappers/useAuthenticationFirebaseMapper";

export const useAuthentication = () => {

  const {
    login: loginInFirebase,
    logout: logoutInFirebase,
  } = useAuthenticationFirebaseClient();
  const {map} = useAuthenticationFirebaseMapper();

  return {
    login: async (email: string, password: string): Promise<Optional<User>> => {
      const userCredentials: UserCredential = await loginInFirebase(email, password);
      return map(userCredentials);
    },
    logout: (): Promise<void> => {
      return logoutInFirebase();
    }
  }
}