import {Account} from "../../../domain/entities/account/Account";

export const useNetProfitCalculator = () => {
  return (accounts: Array<Account>): number => {
    return accounts
      .map(account => {
        const updates = account.updates
        const lastUpdate = updates[updates.length - 1];
        return lastUpdate.value;
      })
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  }
}