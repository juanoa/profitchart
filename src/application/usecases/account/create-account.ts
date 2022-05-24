import {useAccountRepository} from "../../../infrastructure/repositories/account-repository";
import {Account} from "../../../domain/account/Account";
import {useLoadingService} from "../../services/LoadingService";
import {useCreateAccountService} from "../../services/account/CreateAccountService";

export function useCreateAccount() {

  const accountRepository = useAccountRepository();
  const createAccountService = useCreateAccountService()
  const loadingService = useLoadingService();

  return function (name: string, description: string, color: string, currency: string, type: string): Account {
    loadingService.start();
    const account: Account = createAccountService(name, description, color, currency, type);
    accountRepository.create(account);
    loadingService.finish();
    return account;
  };

}