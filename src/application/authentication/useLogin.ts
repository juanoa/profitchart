import {UseCase} from "../../domain/entities/UseCase";
import {useAuthentication} from "../../infrastructure/authentication/useAuthentication";
import {User} from "../../domain/entities/authentication/User";
import {Optional} from "../../domain/entities/Optional";

export const useLogin = (): UseCase<Promise<Optional<User>>> => {

  const {login} = useAuthentication();

  return async (email: string, password: string) => {
    return await login(email, password);
  }
}