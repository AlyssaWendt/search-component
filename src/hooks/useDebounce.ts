import { useEffect, useState } from "react"

const useDebounce = (value: string, delay: number) => {
    const [deboucedValue, setDebounceValue] = useState(value)
    
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value)
        }, delay)
        
        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])
    
    return deboucedValue
}

export default useDebounce
