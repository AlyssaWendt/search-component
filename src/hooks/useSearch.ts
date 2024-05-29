import { useEffect, useState } from "react"
import { fetchBooks } from '../services/bookService'
import { Book } from '../types/Books'


const useSearch = (searchTerm: string, page: number) => {
    const [books, setBooks] = useState<Book[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (searchTerm.length >2) {
            setError(null)
            setLoading(true)
            fetchBooks(searchTerm, page)
            .then((data: Book[]) => setBooks(data))
            .catch(() => setError('Failed to fetch books.'))
            .finally(() => setLoading(false))
        }
    }, [searchTerm, page])

    return { books, error, loading }
}

export default useSearch
