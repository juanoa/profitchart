import {accountTypes} from "../types/accountTypes";
import {getSortMonth} from "./getMonth";
import {getTwoDecimals} from "./floatHelpers";

export const getAccountsSum = (accounts) => {
  const labels = []
  const values = []

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
    values[i] = getTwoDecimals(values[i])
  }

  return {labels, values}
}

export const getAccountSum = (account) => {
  const labels = []
  const values = []

  account.updates.forEach(update => {
    const label = getMonthYearString(update)
    labels.push(label)
    values.push(parseFloat(update.value))
  })

  return {labels, values}
}

export const getAccountSumWithLabels = (account, labels) => {
  const values = []

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

export const getAccountsForDoughnutChart = (accounts) => {
  const labels = []
  const colors = []
  const data = []

  const lastUpdate = getLastUpdate(accounts)

  accounts.forEach(account => {
    const lastMonth = account.updates.find(function (update) {
      return update.month === lastUpdate.month && update.year === lastUpdate.year
    });

    if (lastMonth) {
      labels.push(account.name)
      colors.push(account.color)
      data.push(lastMonth.value)
    }
  })

  return {labels, colors, data}
}

export const getTypesAccountForDoughnutChart = (accounts) => {
  const labels = []
  const colors = []
  const data = []

  const lastUpdate = getLastUpdate(accounts)

  accountTypes.types.forEach(type => {
    labels.push(type.name)
    colors.push(type.color)

    let sum = 0
    const accountsFilter = accounts.filter(account => account.type === type.slug)

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

const getLastUpdate = (accounts) => {
  const updates = []

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

const getMonthYearString = (update) => {
  return `${getSortMonth(update.month)}. ${update.year}`
}