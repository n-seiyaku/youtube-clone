import { SearchIcon } from '../icons'
import { handleSubmit } from '@/app/libs/actions'

const SearchForm = ({ children }) => {
  return (
    <form className="flex items-center" action={handleSubmit}>
      {children}
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
