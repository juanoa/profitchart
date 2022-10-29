import React from 'react'
import {useForm} from "../../hooks/useForm";
import {months} from "../../../config/data/date-config";
import {FormGroup} from "../ui/form/FormGroup";
import {SelectGroup} from "../ui/form/SelectGroup";
import {Account} from "../../../domain/entities/account/Account";
import {Currency} from "../../../domain/entities/currency/Currency";
import {Optional} from "../../../domain/entities/Optional";
import {useCurrencyConfigRepository} from "../../hooks/useCurrencyConfigRepository";
import AccountUpdate from "../../../domain/entities/account/AccountUpdate";
import {useAddUpdateToAccount} from "../../../application/accounts/useAddUpdateToAccount";
import {useAuthenticationContext} from "../../contexts/AuthenticationContext";

interface Props {
  account: Account;
  onChange: (account: Account) => void;
}

interface CreateUpdateForm {
  year: number;
  month: number;
  value: string;
}

export const CreateUpdate = ({account, onChange}: Props) => {

  const addUpdateToAccount = useAddUpdateToAccount();
  const currencyConfigRepository = useCurrencyConfigRepository()
  const {user} = useAuthenticationContext();

  const currency: Optional<Currency> = currencyConfigRepository.getCurrencyByCode(account.currency);

  const today = new Date()
  const [formValues, handleInputChanges, reset] = useForm<CreateUpdateForm>({
    year: today.getFullYear(),
    month: today.getMonth(),
    value: ""
  })
  const {year, month, value} = formValues

  const isFormValid = () => {
    return Number(value) >= 0;
  }

  const handleForm = (e: any) => {
    e.preventDefault();
    if (isFormValid()) {
      const update: AccountUpdate = {
        date: {year, month},
        value: Number(value || 0)
      };
      addUpdateToAccount(user?.uid, account, update)
        .then(account => {
          onChange(account);
          reset();
        });
    }
  }

  return (
    <div className="card mb-4">
      <form onSubmit={handleForm}>
        <h3>New update</h3>
        <div className="account__create-update-row">
          <FormGroup
            label="Year"
            name="year"
            onChange={handleInputChanges}
            value={year}
            required
          />
          <SelectGroup
            label="Month"
            name="month"
            onChange={handleInputChanges}
            options={months.map(month => ({value: String(month.number), label: month.name}))}
            value={month}
          />
          <FormGroup
            label="Value"
            name="value"
            placeholder={currency?.symbol}
            onChange={handleInputChanges}
            value={value}
            required
          />
          <button
            type="submit"
            className="btn btn-success btn-lg mt-3"
            disabled={!value || !isFormValid()}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}