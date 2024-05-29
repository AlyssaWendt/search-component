import React from 'react'
import './Navbar.scss'
import SearchInput from '../SearchComponent/SearchInput/SearchInput'

interface NavbarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Book Search</h1>
      </div>
      <div className="navbar-search">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </nav>
  )
}

export default Navbar
