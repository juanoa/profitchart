import {currencies} from "../../config/data/currency";

export const getCurrencyByCode = (code) => currencies.find(currency => currency.code === code);