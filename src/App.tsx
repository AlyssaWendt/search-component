import React, { useState } from 'react'
import './assets/styles/global.scss'
import Navbar from './components/Navbar/Navbar'
import SearchResults from './components/SearchComponent/SearchResults/SearchResults'
import useSearch from './hooks/useSearch'
import useDebounce from './hooks/useDebounce'

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [page, setPage] = useState<number>(1)
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const { books, error, loading } = useSearch(debouncedSearchTerm, page)

  return (
    <div className="App">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main>
        <SearchResults books={books} page={page} setPage={setPage} loading={loading} error={error} />
      </main>
    </div>
  )
}

export default App
