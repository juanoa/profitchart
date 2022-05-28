import {useAccountRepository} from "../../../infrastructure/repositories/account-repository";
import {Account} from "../../../domain/account/Account";
import {useLoadingService} from "../../services/loading-service";
import {useAccountCreator} from "../../services/account/account-creator";

export function useCreateAccount() {

  const accountRepository = useAccountRepository();
  const createAccountService = useAccountCreator()
  const loadingService = useLoadingService();

  return function (name: string, description: string, color: string, currency: string, type: string): Account {
    loadingService.start();
    const account: Account = createAccountService(name, description, color, currency, type);
    accountRepository.create(account);
    loadingService.finish();
    return account;
  };

}