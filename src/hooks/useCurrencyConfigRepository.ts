import {Currency} from "../interfaces/currency/Currency";
import {currencies} from "../config/data/currency-config";
import {Optional} from "../interfaces/Optional";

export function useCurrencyConfigRepository() {
  function getCurrencyByCode(code: string): Optional<Currency> {
    return currencies.find(currency => currency.code === code);
  }

  return {getCurrencyByCode}
}