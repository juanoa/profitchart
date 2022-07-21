import React from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "../../hooks/useForm";
import PageLayout from "../../layout/PageLayout";
import {accountColors, accountTypes} from "../../../config/data/account-config";
import {currencies} from "../../../config/data/currency-config";

interface CreateAccountForm {
  name: string,
  type: string,
  description: string,
  color: string,
  currency: string
}

export const CreateAccountPage = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  // @ts-ignore
  const {loading} = useSelector(state => state.ui)

  const [formValues, handleInputChanges] = useForm<CreateAccountForm>({
    name: '',
    type: 'savings',
    description: '',
    color: '#ff695d',
    currency: 'EUR'
  })

  const {name, type, description, color, currency} = formValues

  const handleForm = (e: any) => {
    e.preventDefault()
    // TODO: Create account
    history.push('/accounts')
  }

  return (
    <PageLayout title="Create AccountFirebaseDto" emoji="➕">
      <form className="card" onSubmit={handleForm}>
        <div className="row mb-4">
          <div className="col-md-6">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              autoComplete="off"
              value={name}
              onChange={handleInputChanges}
            />
          </div>
          <div className="col-md-6">
            <label className="label">Type</label>
            <select
              name="type"
              value={type}
              onChange={handleInputChanges}
              className="input-select"
            >
              {accountTypes.map(type => <option value={type.id}>{type.name} {type.emoji}</option>)}
            </select>
          </div>
        </div>
        <label className="label">Description</label>
        <textarea
          name="description"
          className="text-area"
          value={description}
          onChange={handleInputChanges}
        />
        <div className="row mt-4 mb-4">
          <div className="col-md-6">
            <label className="label">Color</label>
            <select
              name="color"
              value={color}
              onChange={handleInputChanges}
              className="input-select"
            >
              {accountColors.map(color => <option value={color.hex}>{color.name}</option>)}
            </select>
          </div>
          <div className="col-md-6">
            <label className="label">Currency</label>
            <select
              name="currency"
              value={currency}
              onChange={handleInputChanges}
              className="input-select"
            >
              {currencies.map(currency => <option value={currency.code}>{currency.name}</option>)}
            </select>
          </div>
        </div>

        <NavLink
          exact
          to="/accounts"
        >
          <div className="btn btn-danger btn-lg">
            Cancel
          </div>
        </NavLink>
        <button
          type="submit"
          className="btn btn-success btn-lg ml-2"
          disabled={loading}
        >
          Save
        </button>
      </form>
    </PageLayout>
  );
};