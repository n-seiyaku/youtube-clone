'use client'

import React, { useState } from 'react'

import { FiSearch } from 'react-icons/fi'
import { handleSubmit } from '@/app/libs/actions'
import { SearchIcon } from '../icons'

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const submit = () => {
    handleSubmit(searchQuery)
  }

  return (
    <form className="flex items-center" action={submit}>
      <input
        className="pl-4 w-[33.5rem] h-10 rounded-l-[2.5rem] bg-primary border border-secondary focus:outline-none focus:border-[#1c62b9]"
        type="text"
        placeholder="Tìm kiếm"
        onChange={(e) => {
          setSearchQuery(e.target.value)
        }}
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
