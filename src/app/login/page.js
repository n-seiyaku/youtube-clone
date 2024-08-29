'use client'

import { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../AuthProvider'
import { useRouter } from 'next/navigation'

export default function LoginPage({ searchParams }) {
  const { setAuthData, setIsAuthenticated } = useContext(AuthContext)
  const router = useRouter()
  const [data, setData] = useState(null)

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
        .then((data) => router.push('/'))
        .catch((err) => console.log(err))
    }
  }, [searchParams, router, setIsAuthenticated, setAuthData])

  return (
    <div>
      <h1>Next.js API Route Example</h1>
    </div>
  )
}
