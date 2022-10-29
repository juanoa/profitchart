import {UseCase} from "../../domain/entities/UseCase";
import {useAccountCreator} from "../services/accounts/useAccountCreator";

export const useCreateAccount = (): UseCase<void> => {

  const createAccount = useAccountCreator();

  return (name: string, type: string, description: string, color: string, currency: string) => {
    const account = createAccount(name, type, description, color, currency);
  }
}