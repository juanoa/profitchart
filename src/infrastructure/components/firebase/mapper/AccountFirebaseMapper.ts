import {BidirectionalMapper} from "../../../utils/mappers";
import {Account} from "../../../../domain/account/Account";
import {AccountFirebaseDto} from "../dto/account/AccountFirebaseDto";
import {useAccountUpdateFirebaseMapper} from "./AccountUpdateFirebaseMapper";
import {AccountTypes} from "../../../../domain/account/AccountTypes";

export function useAccountFirebaseMapper(): BidirectionalMapper<Account, AccountFirebaseDto> {

  const {convert: convertAccountUpdate, reverse: reverseAccountUpdate} = useAccountUpdateFirebaseMapper();

  function convert(entity: Account): AccountFirebaseDto {
    return {
      id: entity.id,
      color: entity.color,
      description: entity.description,
      currency: entity.currency,
      date: entity.date.getTime(),
      archived: entity.archived,
      updates: entity.updates.map(update => convertAccountUpdate(update)),
      name: entity.name,
      type: entity.type
    }
  }

  function reverse(dto: AccountFirebaseDto): Account {
    return {
      id: dto.id,
      color: dto.color,
      description: dto.description,
      currency: dto.currency,
      date: new Date(dto.date),
      archived: dto.archived,
      updates: dto.updates.map(update => reverseAccountUpdate(update)),
      name: dto.name,
      type: dto.type as AccountTypes
    }
  }

  return {convert, reverse};
}