import {UseCase} from "../../domain/entities/UseCase";
import {useAccountRepository} from "../../infrastructure/repositories/useAccountRepository";
import {useNetProfitCalculator} from "../services/accounts/useNetProfitCalculator";

export const useGetNetProfit = (): UseCase<Promise<Number>> => {

  const {findByUser} = useAccountRepository();
  const calculateNetProfit = useNetProfitCalculator();

  return async (uid: string) => {
    const accounts = await findByUser(uid);
    return calculateNetProfit(accounts);
  }
}