import { useCallback } from 'react'

/**
 * Custom hook for smooth scrolling to sections
 * @param {React.RefObject} ref - Reference to the target element
 * @param {Object} options - Scroll options
 * @returns {Function} Scroll function
 */
export const useScrollToSection = (ref, options = {}) => {
  const defaultOptions = {
    behavior: 'smooth',
    block: 'center',
    ...options
  }

  return useCallback(() => {
    if (ref?.current) {
      ref.current.scrollIntoView(defaultOptions)
    }
  }, [ref, defaultOptions])
}
