import {currencies} from "../../../config/data/currency-config";
import {Optional} from "../../../domain/Optional";
import {CurrencyUiDto} from "../ui/dto/CurrencyUiDto";

export function useCurrencyConfig() {

  function getCurrencies(): Array<CurrencyUiDto> {
    return currencies;
  }

  function getCurrencyByCode(code: string): Optional<CurrencyUiDto> {
    return currencies.find(currency => currency.code === code);
  }

  return {getCurrencies, getCurrencyByCode};
}