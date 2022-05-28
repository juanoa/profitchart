import {Account} from "../../../domain/account/Account";
import {AccountUpdate} from "../../../domain/account/AccountUpdate";

function orderAccountUpdatesByDate(updates: Array<AccountUpdate>): Array<AccountUpdate> {
    updates.sort( (a, b) =>  {
        const aSize = a.year;
        const bSize = b.year;
        const aLow = a.month;
        const bLow = b.month;

        if (aSize === bSize) {
            return (aLow < bLow) ? -1 : (aLow > bLow) ? 1 : 0;
        } else {
            return (aSize < bSize) ? -1 : 1;
        }
    });
    return updates;
}

export function useAccountUpdateAdder() {
    return function (account: Account, accountUpdate: AccountUpdate): Account {
        account.updates.push(accountUpdate)
        account.updates = orderAccountUpdatesByDate(account.updates)
        return account;
    }
}