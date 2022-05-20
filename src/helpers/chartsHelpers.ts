import {getSortMonth} from "./getMonth";
import {getTwoDecimals} from "./floatHelpers";
import {accountTypes} from "../config/data/account-config";
import {Account} from "../domain/account/Account";
import {Optional} from "../domain/Optional";
import {AccountUpdate} from "../domain/account/AccountUpdate";

export const getAccountsSum = (accounts: Array<Account>) => {
  const labels: Array<string> = []
  const values: Array<number> = []

  accounts.forEach(account => {
    if (!account.archived) {
      account.updates.forEach(update => {
        const label = getMonthYearString(update)
        const index = labels.findIndex(function (arrayLabel) {
          return arrayLabel === label
        })

        if (index === -1) {
          labels.push(label)
          values.push(parseFloat(update.value))
        } else {
          values[index] += parseFloat(update.value)
        }

      })
    }
  })

  for (let i = 0; i < values.length; i++) {
    values[i] = getTwoDecimals(String(values[i]))
  }

  return {labels, values}
}

export const getAccountSum = (account: Account) => {
  const labels: Array<string> = []
  const values: Array<number> = []

  account.updates.forEach(update => {
    const label = getMonthYearString(update)
    labels.push(label)
    values.push(parseFloat(update.value))
  })

  return {labels, values}
}

export const getAccountSumWithLabels = (account: Account, labels: Array<string>) => {
  const values: Array<Optional<number>> = []

  labels.forEach(l => {
    values.push(undefined)
  })

  account.updates.forEach(update => {
    const label = getMonthYearString(update)
    const index = labels.findIndex(function (arrayLabel) {
      return arrayLabel === label
    })

    values[index] = parseFloat(update.value)

  })

  return values
}

export const getAccountsForDoughnutChart = (accounts: Array<Account>) => {
  const labels: Array<string> = []
  const colors: Array<string> = []
  const data: Array<number> = []

  const lastUpdate = getLastUpdate(accounts)

  accounts.forEach(account => {
    const lastMonth = account.updates.find(function (update) {
      return update.month === lastUpdate.month && update.year === lastUpdate.year
    });

    if (lastMonth) {
      labels.push(account.name)
      colors.push(account.color)
      data.push(Number(lastMonth.value))
    }
  })

  return {labels, colors, data}
}

export const getTypesAccountForDoughnutChart = (accounts: Array<Account>) => {
  const labels: Array<string> = []
  const colors: Array<string> = []
  const data: Array<number> = []

  const lastUpdate = getLastUpdate(accounts)

  accountTypes.forEach(type => {
    labels.push(type.name)
    colors.push(type.color)

    let sum = 0
    const accountsFilter = accounts.filter(account => account.type === type.id)

    accountsFilter.forEach(account => {
      const lastMonth = account.updates.find(function (update) {
        return update.month === lastUpdate.month && update.year === lastUpdate.year
      });

      if (lastMonth) {
        sum += Number(lastMonth.value)
      }
    })
    data.push(sum)
  })

  return {labels, colors, data}
}

const getLastUpdate = (accounts: Array<Account>) => {
  const updates: Array<AccountUpdate> = []

  accounts.forEach(account => {
    Array.prototype.push.apply(updates, account.updates)
  })

  updates.sort(function (a, b) {
    const aSize = a.year;
    const bSize = b.year;
    const aLow = a.month;
    const bLow = b.month;

    if (aSize === bSize) {
      return (aLow < bLow) ? -1 : (aLow > bLow) ? 1 : 0;
    } else {
      return (aSize < bSize) ? -1 : 1;
    }
  })
  return updates[updates.length - 1]
}

const getMonthYearString = (update: AccountUpdate) => {
  return `${getSortMonth(Number(update.month))}. ${update.year}`
}