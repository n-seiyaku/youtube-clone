'use client'

import { startTransition, useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { SearchIcon } from '@/app/ui/icons'
import { useProgressBar } from '@/app/ui/components/ProgressBar'

const NavBarSearchForm = () => {
  const path = usePathname()
  const searchParam = useSearchParams()
  const currentParam = searchParam.get('search_query')
  const router = useRouter()
  const progress = useProgressBar()
  const [inputValue, setInputValue] = useState(currentParam || '')

  const handleRedirect = (e = undefined) => {
    if (inputValue) {
      e.preventDefault()
      e.target.blur()
      progress.start()

      startTransition(() => {
        router.push(`/results?${new URLSearchParams({ search_query: inputValue.trim() })}`)
        progress.done()
      })
    }
  }

  useEffect(() => {
    if (path !== '/results') {
      setInputValue('')
    }
  }, [path, currentParam])

  return (
    <div className="flex items-center">
      <input
        className="pl-4 w-[33.5rem] h-10 rounded-l-[2.5rem] bg-primary border border-secondary focus:outline-none focus:border-[#1c62b9]"
        type="text"
        placeholder="Tìm kiếm"
        name="search-query"
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleRedirect(e)
          }
        }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="w-16 h-10 rounded-r-[2.5rem] flex items-center bg-tertiary justify-center border border-l-0 border-secondary"
        type="submit"
        onClick={handleRedirect}
      >
        <SearchIcon />
      </button>
    </div>
  )
}

export default NavBarSearchForm
