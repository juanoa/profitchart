import {currencies} from "../../config/data/currencies";

export const getCurrencyByCode = (code) => currencies.find(currency => currency.code === code);