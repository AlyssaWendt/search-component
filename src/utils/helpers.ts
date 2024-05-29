/**
 * Truncates a string to a specified length and adds an ellipsis if the string exceeds the length.
 * @param str The string to truncate.
 * @param maxLength The maximum length of the string.
 * @returns The truncated string.
 */
export const truncateString = (str: string, maxLength: number): string => {
    if (str.length <= maxLength) return str
    return str.slice(0, maxLength) + '...'
  }
  
  /**
   * Formats a date string into a more readable format.
   * @param dateStr The date string to format.
   * @returns The formatted date string.
   */
  export const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr)
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
  
  /**
   * Debounces a function, making it wait for a specified delay before executing.
   * Useful for reducing the frequency of function executions.
   * @param func The function to debounce.
   * @param delay The delay in milliseconds.
   * @returns A debounced version of the function.
   */
  export const debounce = <F extends (...args: any[]) => any>(func: F, delay: number): (...args: Parameters<F>) => void => {
    let timeoutId: ReturnType<typeof setTimeout>
    return (...args: Parameters<F>): void => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(...args)
      }, delay)
    }
  }
  