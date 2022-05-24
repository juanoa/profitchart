import {store} from "../store/store";

export function useAuthReduxAdapter() {

  const authState = store.getState().auth;

  function getUserId(): string {
    // @ts-ignore
    return authState?.uid;
  }

  return {getUserId};
}