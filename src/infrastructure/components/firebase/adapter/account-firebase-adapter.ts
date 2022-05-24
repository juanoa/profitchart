import {Account} from "../../../../domain/account/Account";
import {useAccountFirebaseDao} from "../dao/account-firebase-dao";
import {AccountFirebaseDto} from "../dto/account/AccountFirebaseDto";
import {useAccountFirebaseMapper} from "../mapper/AccountFirebaseMapper";

export function useAccountFirebaseAdapter() {

  const accountFirebaseDao = useAccountFirebaseDao();
  const accountFirebaseMapper = useAccountFirebaseMapper();

  function findByUserIdOrderByDate(uid: string): Array<Account> {
    const accountFirebaseDtos: Array<AccountFirebaseDto> = accountFirebaseDao.findByUserIdOrderByDate(uid);
    return accountFirebaseDtos.map(dto => accountFirebaseMapper.reverse(dto));
  }

  function create(account: Account, uid: string): Account {
    const accountFirebaseDto: AccountFirebaseDto = accountFirebaseMapper.convert(account);
    accountFirebaseDao.create(accountFirebaseDto, uid).then();
    return account;
  }

  return {findByUserIdOrderByDate, create};
}