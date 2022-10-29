import React, {useState} from 'react'
import {getMonth} from "../../helpers/get-month";
import AccountUpdate from "../../../domain/entities/account/AccountUpdate";
import {AiFillDelete} from "react-icons/ai";
import {MdModeEdit} from "react-icons/md";

interface Props {
  update: AccountUpdate;
  currency: string;
  onDelete: (update: AccountUpdate) => void;
}

export const UpdateRow = ({update, currency, onDelete}: Props) => {

  const [edit, setEdit] = useState(false);

  const {date: {year, month}, value} = update

  const showInput = () => {
    setEdit(true)
  }

  const hideInput = () => {
    setEdit(false)
  }

  return (
    <div className="account__account-update-row">
      <div>{`${getMonth(Number(month))} ${year}`}</div>
        <div className="account__account-update-row-actions">
          {
            edit ? (
              <>
                <form className="account__update-row-cell">
                  <input value={value} className="account__update-input" name="value"/>
                  <button type="submit" className="btn btn-sm btn-success">Save</button>
                  <button className="btn btn-sm btn-danger" onClick={hideInput}>Cancel</button>
                </form>
              </>
            ) : (
              <>
                <span>{value} <small>{currency}</small></span>
                <button className="btn btn-sm btn-primary" onClick={showInput}><MdModeEdit /></button>
                <button className="btn btn-sm btn-danger" onClick={() => onDelete(update)}><AiFillDelete /></button>
              </>
            )
          }
        </div>
    </div>
  )
}