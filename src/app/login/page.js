'use client'

import { useContext, useEffect } from 'react'

import { AuthContext } from '../AuthProvider'
import getUserData from '@/api/getUserData'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const { setAuthData, setIsAuthenticated } = useContext(AuthContext)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1)
      const params = new URLSearchParams(hash)

      localStorage.setItem('access_token', params.get('access_token'))
      localStorage.setItem('token_type', params.get('token_type'))
      localStorage.setItem('expires_in', params.get('expires_in'))
      localStorage.setItem('scope', params.get('scope'))
      getUserData(setAuthData)
      setIsAuthenticated(true)
      router.push('/')
    }
  }, [router, setAuthData, setIsAuthenticated])
  return
}

export default Page
