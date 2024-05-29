import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchResults from './SearchResults'
import { Book } from '../../../types/Books'

const mockBooks: Book[] = [
  { title: 'Book 1', author_name: ['Author 1'], cover_i: 123 },
  { title: 'Book 2', author_name: ['Author 2'], cover_i: 456 },
]

describe('SearchResults', () => {
  it('renders the loading indicator', () => {
    render(<SearchResults books={[]} page={1} setPage={() => {}} loading={true} error={null} />)
    const loaderElement = screen.getByText(/loading.../i)
    expect(loaderElement).toBeInTheDocument()
  })

  it('renders the error message', () => {
    render(<SearchResults books={[]} page={1} setPage={() => {}} loading={false} error="Error message" />)
    const errorElement = screen.getByText(/error message/i)
    expect(errorElement).toBeInTheDocument()
  })

  it('renders the list of books', () => {
    render(<SearchResults books={mockBooks} page={1} setPage={() => {}} loading={false} error={null} />)
    const bookElements = screen.getAllByRole('listitem')
    expect(bookElements).toHaveLength(2)
  })

  it('calls setPage on pagination button click', () => {
    const setPageMock = jest.fn()
    render(<SearchResults books={mockBooks} page={2} setPage={setPageMock} loading={false} error={null} />)
    
    const nextButton = screen.getByText(/next/i)
    fireEvent.click(nextButton)
    expect(setPageMock).toHaveBeenCalledWith(3)

    const previousButton = screen.getByText(/previous/i)
    fireEvent.click(previousButton)
    expect(setPageMock).toHaveBeenCalledWith(1)
  })

  it('disables the previous button on the first page', () => {
    render(<SearchResults books={mockBooks} page={1} setPage={() => {}} loading={false} error={null} />)
    const previousButton = screen.getByText(/previous/i)
    expect(previousButton).toBeDisabled()
  })
})
