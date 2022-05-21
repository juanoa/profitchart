import {getSortMonth} from "./get-month";
import {getTwoDecimals} from "./float-helpers";
import {accountTypes} from "../config/data/account-config";
import {Account} from "../domain/account/Account";
import {Optional} from "../domain/Optional";
import {AccountUpdate} from "../domain/account/AccountUpdate";
import {AccountType} from "../domain/account/AccountType";
import {orderAccountUpdatesByDate} from "./date-helpers";

export const getAccountsSum = (accounts: Array<Account>) => {
  const labels: Array<string> = [];
  const values: Array<number> = [];

  accounts.forEach(account => {
    if (!account.archived) {
      account.updates.forEach(update => {
        const label = getMonthYearString(update);
        const index = labels.findIndex(arrayLabel => arrayLabel === label);

        if (index === -1) {
          labels.push(label);
          values.push(update.value);
        } else {
          values[index] += update.value;
        }

      })
    }
  })

  for (let i = 0; i < values.length; i++) {
    values[i] = getTwoDecimals(String(values[i]));
  }

  return {labels, values};
}

export const getAccountSum = (account: Account) => {
  const labels: Array<string> = []
  const values: Array<number> = []

  account.updates.forEach(update => {
    const label = getMonthYearString(update);
    labels.push(label);
    values.push(update.value);
  })

  return {labels, values};
}

export const getAccountSumWithLabels = (account: Account, labels: Array<string>) => {
  const values: Array<Optional<number>> = []

  labels.forEach(l => values.push(undefined))

  account.updates.forEach(update => {
    const label = getMonthYearString(update);
    const index = labels.findIndex(arrayLabel => arrayLabel === label);

    values[index] = update.value;
  })

  return values;
}

export const getAccountsForDoughnutChart = (accounts: Array<Account>) => {
  const labels: Array<string> = [];
  const colors: Array<string> = [];
  const data: Array<number> = [];

  const lastUpdate = getLastUpdate(accounts);

  accounts.forEach(account => {
    const lastMonth = account.updates
      .find(update => update.month === lastUpdate.month && update.year === lastUpdate.year);

    if (lastMonth) {
      labels.push(account.name);
      colors.push(account.color);
      data.push(lastMonth.value);
    }
  });

  return {labels, colors, data};
}

export const getTypesAccountForDoughnutChart = (accounts: Array<Account>) => {
  const labels: Array<string> = [];
  const colors: Array<string> = [];
  const data: Array<number> = [];

  const lastUpdate = getLastUpdate(accounts);

  accountTypes.forEach((type: AccountType) => {
    labels.push(type.name);
    colors.push(type.color);

    const accountsFilter = accounts.filter(account => account.type === type.id);

    let sum = 0;
    accountsFilter.forEach(account => {
      const lastMonth = account.updates
        .find(update => update.month === lastUpdate.month && update.year === lastUpdate.year);

      if (lastMonth) {
        sum += lastMonth.value;
      }
    })
    data.push(sum);
  })

  return {labels, colors, data}
}

const getLastUpdate = (accounts: Array<Account>) => {
  const updates: Array<AccountUpdate> = []

  accounts.forEach(account => {
    Array.prototype.push.apply(updates, account.updates)
  })

  const updatesOrdered = orderAccountUpdatesByDate(updates)
  return updatesOrdered[updatesOrdered.length - 1]
}

const getMonthYearString = (update: AccountUpdate) => {
  return `${getSortMonth(Number(update.month))}. ${update.year}`
}