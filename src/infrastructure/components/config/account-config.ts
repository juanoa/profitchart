import {accountColors, accountTypes} from "../../../config/data/account-config";
import {AccountTypeUiDto} from "../ui/dto/AccountTypeUiDto";
import {Optional} from "../../../domain/Optional";
import {AccountColorUiDto} from "../ui/dto/AccountColorUiDto";


export function useAccountConfig() {

  function getAccountColors(): Array<AccountColorUiDto> {
    return accountColors;
  }

  function getAccountTypes(): Array<AccountTypeUiDto> {
    return accountTypes;
  }

  function getAccountTypeById(id: string): Optional<AccountTypeUiDto> {
    return accountTypes.find(accountType => accountType.id === id);
  }

  return{
    getAccountColors,
    getAccountTypes,
    getAccountTypeById
  };
}