import {UseCase} from "../../domain/entities/UseCase";
import {useAuthentication} from "../../infrastructure/authentication/useAuthentication";
import {UserCredential} from "firebase/auth";

export const useLogin = (): UseCase<Promise<UserCredential>> => {

  const {login} = useAuthentication();

  return (email: string, password: string) => {
    return login(email, password);
  }
}