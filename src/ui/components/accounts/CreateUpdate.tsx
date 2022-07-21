import React from 'react'
import {useForm} from "../../hooks/useForm";
import {months} from "../../../config/data/date-config";
import {FormGroup} from "../ui/form/FormGroup";
import {SelectGroup} from "../ui/form/SelectGroup";
import {Account} from "../../../domain/entities/account/Account";
import {Currency} from "../../../domain/entities/currency/Currency";
import {Optional} from "../../../domain/entities/Optional";
import {AccountUpdate} from "../../../domain/entities/account/AccountUpdate";
import {useCurrencyConfigRepository} from "../../hooks/useCurrencyConfigRepository";

interface Props {
  account: Account;
}

interface CreateUpdateForm {
  year: number;
  month: number;
  value: number | undefined;
}

export const CreateUpdate = ({account}: Props) => {

  const currencyConfigRepository = useCurrencyConfigRepository()

  const currency: Optional<Currency> = currencyConfigRepository.getCurrencyByCode(account.currency);

  const today = new Date()
  const [formValues, handleInputChanges] = useForm<CreateUpdateForm>({
    year: today.getFullYear(),
    month: today.getMonth(),
    value: undefined
  })
  const {year, month, value} = formValues

  const isFormValid = () => {
    return Number(value)
  }

  const handleForm = (e: any) => {
    e.preventDefault();
    if (isFormValid()) {
      const update: AccountUpdate = {
        year,
        month,
        value: Number(value || 0)
      };
      console.log(update)
      // TODO: Create update
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