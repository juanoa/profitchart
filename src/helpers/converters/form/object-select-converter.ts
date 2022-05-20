import {Month} from "../../../domain/date/Month";

export const monthsToSelectConverter: ((months: Array<Month>) => Array<{ value: string, label: string }>) = (months) => {
  return months.map(month => ({value: month.number.toString(), label: month.name}))
};