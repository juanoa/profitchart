import {AccountTypesFirebaseDto} from "../dto/AccountTypesFirebaseDto";
import {AccountTypes} from "../../../../domain/entities/account/AccountTypes";
import {AccountUpdateFirebaseDto} from "../dto/AccountUpdateFirebaseDto";
import {AccountUpdate} from "../../../../domain/entities/account/AccountUpdate";
import {AccountFirebaseDto} from "../dto/AccountFirebaseDto";
import {Account} from "../../../../domain/entities/account/Account";
import {UnidirectionalMapper} from "../../../utils/UnidirectionalMapper";

export const useAccountFirebaseMapper = (): UnidirectionalMapper<AccountFirebaseDto, Account> => {
  const mapAccountTypes = (type: AccountTypesFirebaseDto): AccountTypes => {
    switch (type) {
      case AccountTypesFirebaseDto.INVESTMENT:
        return AccountTypes.INVESTMENT;
      case AccountTypesFirebaseDto.SAVINGS:
        return AccountTypes.SAVINGS;
      case AccountTypesFirebaseDto.OTHER:
        return AccountTypes.OTHER;
      default:
        throw new Error("Account type " + String(type) + "does not exit.");
    }
  }

  const mapAccountUpdate = (update: AccountUpdateFirebaseDto): AccountUpdate => {
    return {
      month: update.month,
      year: update.year,
      value: update.value,
    }
  }

  return {
    map: (dto: AccountFirebaseDto): Account => {
      return {
        type: mapAccountTypes(dto.type),
        id: dto.id,
        name: dto.name,
        description: dto.description,
        updates: dto.updates.map(update => mapAccountUpdate(update)),
        date: dto.date,
        color: dto.color,
        archived: dto.archived,
        currency: dto.currency,
      }
    }
  }
}