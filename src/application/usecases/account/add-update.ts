import {Account} from "../../../domain/account/Account";
import {AccountUpdate} from "../../../domain/account/AccountUpdate";
import {useAccountUpdateAdder} from "../../services/account/account-update-adder";
import {useAccountRepository} from "../../../infrastructure/repositories/account-repository";

export function useAddUpdate() {

    const accountUpdateAdder = useAccountUpdateAdder();
    const accountRepository = useAccountRepository()

    return function (account: Account, month: number, year: number, value: number): Account {
        const update: AccountUpdate = {month, year, value}
        const accountWithNewUpdate = accountUpdateAdder(account, update);
        return accountRepository.update(accountWithNewUpdate)
    }
}