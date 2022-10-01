import AccountUpdate from "../../domain/entities/account/AccountUpdate";

export const orderAccountUpdatesByDate: (updates: Array<AccountUpdate>) => Array<AccountUpdate> = (updates) => {
  updates.sort( (a, b) =>  {
    const aSize = a.date.year;
    const bSize = b.date.year;
    const aLow = a.date.month;
    const bLow = b.date.month;

    if (aSize === bSize) {
      return (aLow < bLow) ? -1 : (aLow > bLow) ? 1 : 0;
    } else {
      return (aSize < bSize) ? -1 : 1;
    }
  });
  return updates;
}