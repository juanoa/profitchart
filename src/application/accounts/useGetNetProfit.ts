import {UseCase} from "../../domain/entities/UseCase";
import {useAccountAdapter} from "../../infrastructure/adapters/useAccountAdapter";
import {useNetProfitCalculator} from "../services/accounts/useNetProfitCalculator";

export const useGetNetProfit = (): UseCase<Promise<Number>> => {

  const {findByUser} = useAccountAdapter();
  const calculateNetProfit = useNetProfitCalculator();

  return async (uid: string) => {
    const accounts = await findByUser(uid);
    const netProfit: number = calculateNetProfit(accounts)
    return Math.round(netProfit * 100) / 100;
  }
}