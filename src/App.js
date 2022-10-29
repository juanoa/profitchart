import React from 'react'
import { AppRouter } from './ui/router/AppRouter'
import './ui/styles/styles.scss'
import AuthenticationProvider from './ui/contexts/AuthenticationContext'

export const App = () => {
  return (
    <AuthenticationProvider>
      <AppRouter/>
    </AuthenticationProvider>
  )
}