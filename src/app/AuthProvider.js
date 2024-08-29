'use client'

import { createContext, useEffect, useState } from 'react'

import parseCookies from '@/app/utils/parseCookies'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(undefined)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const { sub } = parseCookies(document.cookie)
    if (sub) {
      fetch('/api/user', { method: 'GET' })
        .then((res) => {
          if (res.status !== 200) {
            throw new Error('Failed to fetch user data')
          }
          return res.json()
        })
        .then(({ data }) => {
          setAuthData(data.snippet)
          setIsAuthenticated(true)
        })
        .catch((err) => console.log(err))
    }
  }, [])

  return (
    <AuthContext.Provider value={{ authData, setAuthData, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
