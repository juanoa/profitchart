import {accountTypes} from "../../config/data/account";

export const getAccountTypeById = (id) => accountTypes.find(accountType => accountType.id === id);