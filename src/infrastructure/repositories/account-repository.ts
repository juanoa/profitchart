import {Account} from "../../domain/account/Account";
import {useAccountFirebaseAdapter} from "../components/firebase/adapter/account-firebase-adapter";
import {useDispatch} from "react-redux";
import {addNewAccount, deleteAccount, loadAccounts} from "../components/redux/actions/accounts";
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

  function update(account: Account): Account {
    const uid: string = authReduxAdapter.getUserId();
    accountFirebaseAdapter.update(account, uid)
    // TODO Update from Redux
    return account;
  }

  function remove(id: string): void {
    const uid: string = authReduxAdapter.getUserId();
    accountFirebaseAdapter.remove(id, uid);
    dispatch(deleteAccount(id));
  }

  return {load, create, update, remove};
}