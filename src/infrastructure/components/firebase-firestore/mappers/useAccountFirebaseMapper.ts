import {AccountTypesFirebaseDto} from "../dtos/AccountTypesFirebaseDto";
import {AccountTypes} from "../../../../domain/entities/account/AccountTypes";
import {AccountUpdateFirebaseDto} from "../dtos/AccountUpdateFirebaseDto";
import {AccountFirebaseDto} from "../dtos/AccountFirebaseDto";
import {Account} from "../../../../domain/entities/account/Account";
import AccountUpdate from "../../../../domain/entities/account/AccountUpdate";
import {BidirectionalMapper} from "../../../utils/BidirectionalMapper";
import {sortAccountUpdateDatesEquals} from "../../../../domain/entities/account/AccountUpdateDate";

export const useAccountFirebaseMapper = (): BidirectionalMapper<AccountFirebaseDto, Account> => {
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

  const reverseAccountTypes = (type: AccountTypes): AccountTypesFirebaseDto => {
    switch (type) {
      case AccountTypes.INVESTMENT:
        return AccountTypesFirebaseDto.INVESTMENT;
      case AccountTypes.SAVINGS:
        return AccountTypesFirebaseDto.SAVINGS;
      case AccountTypes.OTHER:
        return AccountTypesFirebaseDto.OTHER;
      default:
        throw new Error("Account type " + String(type) + "does not exit.");
    }
  }

  const mapAccountUpdate = (update: AccountUpdateFirebaseDto): AccountUpdate => {
    return {
      date: {
        month: Number(update.month),
        year: Number(update.year),
      },
      value: Number(update.value),
    }
  }

  const reverseAccountUpdate = (update: AccountUpdate): AccountUpdateFirebaseDto => {
    return {
      month: update.date.month,
      year: update.date.year,
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
        updates: dto.updates.map(mapAccountUpdate).sort((a, b) => sortAccountUpdateDatesEquals(a.date, b.date)),
        date: dto.date,
        color: dto.color,
        archived: dto.archived,
        currency: dto.currency,
      }
    },
    reverse: (entity: Account): AccountFirebaseDto => {
      return {
        id: entity.id,
        name: entity.name,
        type: reverseAccountTypes(entity.type),
        date: entity.date,
        color: entity.color,
        archived: entity.archived,
        currency: entity.currency,
        description: entity.description,
        updates: entity.updates.map(reverseAccountUpdate)
      }
    }
  }
}