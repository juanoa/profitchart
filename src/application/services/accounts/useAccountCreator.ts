import {useIdGenerator} from "../useIdGenerator";
import {Account} from "../../../domain/entities/account/Account";
import {AccountTypes} from "../../../domain/entities/account/AccountTypes";

export const useAccountCreator = () => {

  const generateId = useIdGenerator();

  return (name: string, type: string, description: string, color: string, currency: string): Account => {
    const id = generateId();
    return {
      id,
      name,
      color,
      currency,
      description,
      archived: false,
      date: Date.now(),
      updates: [],
      type: <AccountTypes> type,
    }
  }
}