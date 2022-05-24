import {useAccountRepository} from "../../../infrastructure/repositories/account-repository";

export function useDeleteAccount() {

  const accountRepository = useAccountRepository();

  return function(id: string): void {
    accountRepository.remove(id);
  }
}