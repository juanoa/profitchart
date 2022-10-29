import {Currency} from "../../domain/entities/currency/Currency";
import {currencies} from "../../config/data/currency-config";
import {Optional} from "../../domain/entities/Optional";

export function useCurrencyConfigRepository() {
  function getCurrencyByCode(code: string): Optional<Currency> {
    return currencies.find(currency => currency.code === code);
  }

  return {getCurrencyByCode}
}