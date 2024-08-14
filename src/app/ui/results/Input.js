'use client'

import { useSearchParams } from 'next/navigation'

const SearchInput = () => {
  const searchParams = useSearchParams()

  return (
    <input
      className="pl-4 w-[33.5rem] h-10 rounded-l-[2.5rem] bg-primary border border-secondary focus:outline-none focus:border-[#1c62b9]"
      type="text"
      placeholder="Tìm kiếm"
      name="search-query"
      defaultValue={searchParams.get('search_query')?.toString()}
    ></input>
  )
}

export default SearchInput
