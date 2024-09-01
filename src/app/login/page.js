'use client'

import { useContext, useEffect } from 'react'

import { AuthContext } from '@/app/AuthProvider'
import { useRouter } from 'next/navigation'

export default function LoginPage({ searchParams }) {
  const { setAuthData, setIsAuthenticated } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: searchParams.code,
          scope: searchParams.scope,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          router.push('/')
        })
        .catch((err) => console.log('login page', err))
    }
  }, [searchParams, router, setIsAuthenticated, setAuthData])

  return (
    <div>
      <h1>Next.js API Route Example</h1>
    </div>
  )
}
