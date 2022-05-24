import {Account} from "../../domain/account/Account";
import {useAccountFirebaseAdapter} from "../components/firebase/adapter/account-firebase-adapter";
import {useDispatch, useSelector} from "react-redux";
import {addNewAccount} from "../components/redux/actions/accounts";

export function useAccountRepository() {

  const accountFirebaseAdapter = useAccountFirebaseAdapter();
  const dispatch = useDispatch()

  function load(uid: string) {
    // TODO Get from firebase
    const accounts: Array<Account> = accountFirebaseAdapter.findByUserIdOrderByDate(uid);

    // TODO Put on redux

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