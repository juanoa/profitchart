import {AccountUpdate} from "../../../../domain/account/AccountUpdate";
import {AccountUpdateFirebaseDto} from "../dto/account/AccountUpdateFirebaseDto";
import {BidirectionalMapper} from "../../../utils/mappers";

export function useAccountUpdateFirebaseMapper(): BidirectionalMapper<AccountUpdate, AccountUpdateFirebaseDto> {
  function convert(entity: AccountUpdate): AccountUpdateFirebaseDto {
    return {
      month: String(entity.month),
      year: String(entity.year),
      value: String(entity.value)
    };
  }

  function reverse(dto: AccountUpdateFirebaseDto): AccountUpdate {
    return {
      month: Number(dto.month),
      year: Number(dto.year),
      value: Number(dto.value)
    };
  }

  return {convert, reverse}
}