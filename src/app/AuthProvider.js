'use client'

import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem('auth_data'))
    if (authData) {
      setAuthData(authData)
      setIsAuthenticated(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ authData, setAuthData, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
