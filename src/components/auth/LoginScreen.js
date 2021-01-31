import React from 'react'

export const LoginScreen = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <form>
                    <h1 className="auth__title">Login</h1>
                    <div className="auth__row">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            autoComplete="off"
                            placeholder="email@example.com"
                        />
                    </div>
                    <div className="auth__row">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
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