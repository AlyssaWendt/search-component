import React from 'react'
import './SearchResults.scss'
import { Book } from '../../../types/Books'

interface SearchResultsProps {
    books: Book[]
    page: number
    setPage: (page: number) => void
    loading: boolean
    error: string | null
}

const SearchResults: React.FC<SearchResultsProps> = ({ books, page, setPage, loading, error }) => {
    const handleNextPage = () => setPage(page + 1)
    const handlePreviousPage = () => setPage(Math.max(page - 1, 1))

    return (
        <div className="search-results-container">
        {loading && <div className="loader">Loading...</div>}
        {error && <div className="error">{error}</div>}
        {books.length > 0 && (
          <>
            <ul className="search-results">
              {books.map((book: Book, index: number) => (
                <li key={index} className="search-item">
                  <div>
                    <strong>{book.title}</strong> by {book.author_name?.join(', ')}
                  </div>
                  {book.cover_i && (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                      alt={`${book.title} cover`}
                    />
                  )}
                </li>
              ))}
            </ul>
            <div className="pagination">
              <button onClick={handlePreviousPage} disabled={page === 1}>
                Previous
              </button>
              <button onClick={handleNextPage}>Next</button>
            </div>
          </>
        )}
      </div>
    )
}

export default SearchResults
