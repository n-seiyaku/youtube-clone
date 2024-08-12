'use client'

import { SearchIcon } from '../icons'
import { handleSubmit } from '@/app/libs/actions'
import { useSearchParams } from 'next/navigation'

// import React, { useEffect, useState } from 'react'

const SearchForm = () => {
  const searchParam = useSearchParams()
  console.log(searchParam.get('search_query'))

  return (
    <form className="flex items-center" action={handleSubmit}>
      <input
        className="pl-4 w-[33.5rem] h-10 rounded-l-[2.5rem] bg-primary border border-secondary focus:outline-none focus:border-[#1c62b9]"
        type="text"
        placeholder="Tìm kiếm"
        name="search-query"
        defaultValue={searchParam.get('search_query')?.toString()}
      ></input>
      <button
        className="w-16 h-10 rounded-r-[2.5rem] flex items-center bg-tertiary justify-center border border-l-0 border-secondary"
        type="submit"
      >
        <SearchIcon />
      </button>
    </form>
  )
}

export default SearchForm
