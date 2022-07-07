import React from 'react'
import { Provider } from 'react-redux'

import { AppRouter } from './ui/router/AppRouter'
import { store } from './ui/store/store'

import './ui/styles/styles.scss'
import AuthenticationProvider from './ui/contexts/AuthenticationContext'

export const App = () => {
  return (
    <AuthenticationProvider>
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    </AuthenticationProvider>
  )
}