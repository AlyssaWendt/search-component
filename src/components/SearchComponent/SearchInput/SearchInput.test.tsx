import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import SearchInput from './SearchInput'

describe('SearchInput', () => {
  it('renders the search input field', () => {
    render(<SearchInput searchTerm="" setSearchTerm={() => {}} />)
    const inputElement = screen.getByPlaceholderText(/search books.../i)
    expect(inputElement).toBeInTheDocument()
  })

  it('calls setSearchTerm on input change', () => {
    const setSearchTermMock = jest.fn()
    render(<SearchInput searchTerm="" setSearchTerm={setSearchTermMock} />)
    const inputElement = screen.getByPlaceholderText(/search books.../i)
    fireEvent.change(inputElement, { target: { value: 'Harry Potter' } })
    expect(setSearchTermMock).toHaveBeenCalledWith('Harry Potter')
  })

  it('displays the correct value in the input field', () => {
    render(<SearchInput searchTerm="React" setSearchTerm={() => {}} />)
    const inputElement = screen.getByPlaceholderText(/search books.../i)
    expect(inputElement).toHaveValue('React')
  })
})
