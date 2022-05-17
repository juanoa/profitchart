import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "../../hooks/useForm";
import {startCreateUpdate} from "../../actions/accounts";

export const CreateUpdate = ({account}) => {

  const dispatch = useDispatch()
  const {loading} = useSelector(state => state.ui)

  const {currency} = account

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
          <div>
            <label>Year</label>
            <input
              className="input"
              autoComplete="off"
              type="text"
              name="year"
              value={year}
              onChange={handleInputChanges}
              required
            />
          </div>
          <div>
            <label>Month</label>
            <select
              name="month"
              value={month}
              onChange={handleInputChanges}
              className="input-select"
            >
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
          <div>
            <label>Value</label>
            <input
              className="input"
              autoComplete="off"
              type="text"
              name="value"
              placeholder={currency}
              value={value}
              onChange={handleInputChanges}
              required
            />
          </div>
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