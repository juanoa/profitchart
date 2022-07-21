import React from 'react'

import {useForm} from "../../hooks/useForm";
import {useAuthenticationContext} from "../../contexts/AuthenticationContext";

interface LoginForm {
  email: string;
  password: string;
}

export const LoginPage = () => {

  const {onLogin} = useAuthenticationContext();

  const [values, handleInputChange] = useForm<LoginForm>({
    email: '',
    password: ''
  })

  const {email, password} = values

  const isFormValid = () => {
    return password.length >= 5;
  }

  const handleLogin = (e: any) => {
    e.preventDefault()
    if (isFormValid()) {
      onLogin(email, password);
    }
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
              placeholder="***"
              onChange={handleInputChange}
            />
          </div>

          <button
            className="btn btn-primary btn-lg auth__button"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}