import { useState } from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import './SearchBar.css'

const SearchBar = ({ placeholder = 'Search', onSearch }) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
    onSearch?.(event.target.value)
  }

  return (
    <div className="search-bar">
      <SearchRoundedIcon className="search-bar__icon" fontSize="small" />
      <input
        className="search-bar__input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar
