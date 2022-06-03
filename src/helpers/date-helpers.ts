import {AccountUpdate} from "../interfaces/account/AccountUpdate";

export const orderAccountUpdatesByDate: (updates: Array<AccountUpdate>) => Array<AccountUpdate> = (updates) => {
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