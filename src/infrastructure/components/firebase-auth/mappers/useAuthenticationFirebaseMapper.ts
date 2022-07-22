import {UserCredential} from "firebase/auth";
import {UnidirectionalMapper} from "../../../utils/UnidirectionalMapper";
import {User} from "../../../../domain/entities/authentication/User";
import {Optional} from "../../../../domain/entities/Optional";

export const useAuthenticationFirebaseMapper = (): UnidirectionalMapper<UserCredential, Optional<User>> => {
  return {
    map: (dto: UserCredential) => {
      if (!dto.user) return null;

      const {user} = dto;
      return {
        uid: user.uid,
        email: user.email || "",
      }
    }
  }
}