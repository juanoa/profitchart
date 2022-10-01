import {getSortMonth} from "./get-month";
import {getTwoDecimals} from "./float-helpers";
import {accountTypes} from "../../config/data/account-config";
import {Account} from "../../domain/entities/account/Account";
import {Optional} from "../../domain/entities/Optional";
import {AccountType} from "../../domain/entities/account/AccountType";
import {orderAccountUpdatesByDate} from "./date-helpers";
import AccountUpdate from "../../domain/entities/account/AccountUpdate";

export const getAccountsSum = (accounts: Array<Account>): Array<AccountUpdate> => {
  const totalUpdates: Array<AccountUpdate> = [];

  accounts.forEach(account => {
    if (!account.archived) {
      account.updates.forEach(update => {
        const totalUpdateIndex = totalUpdates.findIndex(u => u.date.month === update.date.month && u.date.year === update.date.year);

        if (totalUpdateIndex === -1) {
          totalUpdates.push(update);
        } else {
          const updateInIndex = totalUpdates[totalUpdateIndex]
          totalUpdates[totalUpdateIndex] = {
            ...updateInIndex,
            value: updateInIndex.value + update.value
          }
        }
      })
    }
  })

  for (let i = 0; i < totalUpdates.length; i++) {
    totalUpdates[i].value = getTwoDecimals(String(totalUpdates[i].value));
  }

  return orderAccountUpdatesByDate(totalUpdates);
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
      .find(update => update.date.month === lastUpdate.date.month && update.date.year === lastUpdate.date.year);

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
        .find(update => update.date.month === lastUpdate.date.month && update.date.year === lastUpdate.date.year);

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

export const getMonthYearString = (update: AccountUpdate) => {
  return `${getSortMonth(Number(update.date.month))}. ${update.date.year}`
}