import { useContext } from 'react'
import { LanguageContext } from '../providers/Context'

/**
 * Custom hook to access language context
 * @returns {Object} Language context values
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  
  return context
}
