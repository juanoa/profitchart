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

const getMonthYearString = (update) => {
    return `${update.month}/${update.year}`
}