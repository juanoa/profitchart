import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "../../hooks/useForm";
import {startCreateUpdate} from "../../actions/accounts";
import {months} from "../../config/data/date";
import {getCurrencyByCode} from "../../repository/config/currency-config-repository";
import {FormGroup} from "../ui/form/FormGroup";
import {SelectGroup} from "../ui/form/SelectGroup";
import {monthsToSelectConverter} from "../../helpers/converters/form/object-select-converter";

export const CreateUpdate = ({account}) => {

  const dispatch = useDispatch()
  const {loading} = useSelector(state => state.ui)

  const currency = getCurrencyByCode(account.currency);

  const today = new Date()
  const [formValues, handleInputChanges] = useForm({
    year: today.getFullYear(),
    month: today.getMonth(),
    value: ''
  })
  const {year, month, value} = formValues

  const handleForm = (e) => {
    e.preventDefault()
    dispatch(startCreateUpdate(account, year, month, value))
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
          />
          <SelectGroup
            label="Month"
            name="month"
            onChange={handleInputChanges}
            options={monthsToSelectConverter(months)}
            value={month}
          />
          <FormGroup
            label="Value"
            placeholder={currency.symbol}
            value={value}
            onChange={handleInputChanges}
            name="value"
          />
          <button
            type="submit"
            className="btn btn-success btn-lg mt-3"
            disabled={loading}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}