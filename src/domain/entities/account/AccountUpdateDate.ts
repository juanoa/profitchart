type AccountUpdateDate = {
  month: number;
  year: number;
}

export const areAccountUpdateDatesEquals = (date1: AccountUpdateDate, date2: AccountUpdateDate): boolean => {
  return date1.year === date2.year && date1.month === date2.month;
}

export const sortAccountUpdateDatesEquals = (date1: AccountUpdateDate, date2:AccountUpdateDate) => {
  if (date2.year > date1.year) return -1;
  if (date2.year < date1.year) return 1;
  if (date2.month > date1.month) return -1;
  if (date2.month < date1.month) return 1;
  return 0;
}

export default AccountUpdateDate;