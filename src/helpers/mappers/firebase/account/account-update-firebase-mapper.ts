import {AccountUpdate} from "../../../../domain/account/AccountUpdate";
import {AccountUpdateFirebaseDTO} from "../../../../repository/firebase/dto/account/AccountUpdateFirebaseDTO";

export const accountUpdateFirebaseMapperToDto: ((entity: AccountUpdate) => AccountUpdateFirebaseDTO) = (entity) => {
  return  {
    month: String(entity.month),
    year: String(entity.year),
    value: String(entity.value)
  };
}

export const accountUpdateFirebaseMapperToEntity: ((dto: AccountUpdateFirebaseDTO) => AccountUpdate) = (dto) => {
  return  {
    month: Number(dto.month),
    year: Number(dto.year),
    value: Number(dto.value)
  };
}