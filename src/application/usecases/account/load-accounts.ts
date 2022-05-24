import {useAccountRepository} from "../../../infrastructure/repositories/account-repository";

export function useLoadAccounts() {

  const accountRepository = useAccountRepository();

  return function (uid: string) {
    accountRepository.load(uid).then();
  }
}