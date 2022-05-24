import {Account} from "../../domain/account/Account";
import {useAccountFirebaseAdapter} from "../components/firebase/adapter/account-firebase-adapter";
import {useDispatch} from "react-redux";
import {addNewAccount, loadAccounts} from "../components/redux/actions/accounts";
import {useAuthReduxAdapter} from "../components/redux/adapter/auth-redux-adapter";

export function useAccountRepository() {

  const accountFirebaseAdapter = useAccountFirebaseAdapter();
  const authReduxAdapter = useAuthReduxAdapter();
  const dispatch = useDispatch()

  async function load(uid: string) {
    const accounts: Array<Account> = await accountFirebaseAdapter.findByUserIdOrderByDate(uid).then();
    dispatch(loadAccounts(accounts));

  }

  function create(account: Account): Account {
    const uid: string = authReduxAdapter.getUserId();
    accountFirebaseAdapter.create(account, uid);
    dispatch(addNewAccount(account));
    return account;
  }

  return {load, create};
}