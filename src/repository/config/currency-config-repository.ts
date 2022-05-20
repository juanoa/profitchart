import {currencies} from "../../config/data/currency-config";
import {Currency} from "../../domain/currency/Currency";
import {Optional} from "../../domain/Optional";

export const getCurrencyByCode: (code: string) => Optional<Currency> = (code) => {
  return currencies.find(currency => currency.code === code)
};