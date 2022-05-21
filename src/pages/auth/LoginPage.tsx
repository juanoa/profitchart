import React from 'react'
import {useDispatch, useSelector} from "react-redux";

import {useForm} from "../../hooks/useForm";
import {startLoginEmailPassword} from "../../actions/auth";
import {removeToast, setToast} from "../../actions/ui";

interface LoginForm {
  email: string;
  password: string;
}

export const LoginPage = () => {

  const dispatch = useDispatch()
  // @ts-ignore
  const {loading} = useSelector(state => state.ui)

  const [values, handleInputChange] = useForm<LoginForm>({
    email: '',
    password: ''
  })

  const {email, password} = values

  const handleLogin = (e: any) => {
    e.preventDefault()
    if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password))
    }
  }

  const isFormValid = () => {
    if (password.length < 5) {
      // dispatch(setToast('The password is too short', 'error'))
      return false;
    }
    dispatch(removeToast())
    return true;
  }

  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <form onSubmit={handleLogin}>
          <h1 className="auth__title">
            <span className="border-bottom-red">L</span>
            <span className='border-bottom-yellow'>o</span>
            <span className='border-bottom-green'>g</span>
            in
          </h1>
          <div className="auth__row">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="email@example.com"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="auth__row">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>

          <button
            className="btn btn-primary btn-lg auth__button"
            type="submit"
            disabled={loading}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}