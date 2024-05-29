import { Book } from '../types/Books'

export const fetchBooks = async (query: string, page: number = 1): Promise<Book[]> => {
  const response = await fetch(`https://openlibrary.org/search.json?q=${query}&page=${page}`)
  const data = await response.json()
  return data.docs as Book[]
}
