import React from 'react'
import './SearchInput.scss'

interface SearchInputProps {
    searchTerm: string
    setSearchTerm: (term: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({searchTerm, setSearchTerm}) => {
    return (
        <input 
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
        />
    )
}

export default SearchInput
