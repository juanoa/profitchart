import {UseCase} from "../../domain/entities/UseCase";
import {useAuthentication} from "../../infrastructure/authentication/useAuthentication";

export const useLogout = (): UseCase<Promise<void>> => {

  const {logout} = useAuthentication();

  return (): Promise<void> => {
    return logout();
  }
}