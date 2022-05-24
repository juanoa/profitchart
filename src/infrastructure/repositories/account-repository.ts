import {Account} from "../../domain/account/Account";
import {useAccountFirebaseAdapter} from "../components/firebase/adapter/account-firebase-adapter";
import {useDispatch, useSelector} from "react-redux";
import {addNewAccount, loadAccounts} from "../components/redux/actions/accounts";

export function useAccountRepository() {

  const accountFirebaseAdapter = useAccountFirebaseAdapter();
  const dispatch = useDispatch()

  async function load(uid: string) {
    const accounts: Array<Account> = await accountFirebaseAdapter.findByUserIdOrderByDate(uid).then(r => r);
    dispatch(loadAccounts(accounts));

  }

  function create(account: Account): Account {
    //@ts-ignore
    const {uid} = useSelector(state => state.auth)
    accountFirebaseAdapter.create(account, uid);
    dispatch(addNewAccount(account));
    return account;
  }

  return {load, create};
}