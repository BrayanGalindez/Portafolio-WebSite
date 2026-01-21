import { createContext, useEffect, useState, useCallback } from 'react'
import { THEMES, LANGUAGES } from '../utils/constants'

const STORAGE_KEYS = {
  THEME: 'theme',
  LANGUAGE: 'language'
}

const getInitialTheme = () => {
  if (typeof window === 'undefined') return THEMES.LIGHT
  
  const storedTheme = localStorage.getItem(STORAGE_KEYS.THEME)
  if (storedTheme && (storedTheme === THEMES.LIGHT || storedTheme === THEMES.DARK)) {
    return storedTheme
  }
  
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return THEMES.DARK
  }
  
  return THEMES.LIGHT
}

const getInitialLanguage = () => {
  if (typeof window === 'undefined') return LANGUAGES.EN
  
  const storedLanguage = localStorage.getItem(STORAGE_KEYS.LANGUAGE)
  if (storedLanguage && (storedLanguage === LANGUAGES.ES || storedLanguage === LANGUAGES.EN)) {
    return storedLanguage
  }
  
  const browserLanguage = navigator.language || LANGUAGES.EN
  return browserLanguage.split('-')[0] === LANGUAGES.ES ? LANGUAGES.ES : LANGUAGES.EN
}

export const ThemeContext = createContext(null)
export const LanguageContext = createContext(null)

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme)
  const isDarkMode = theme === THEMES.DARK

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.THEME, theme)
    document.documentElement.classList.remove(THEMES.LIGHT, THEMES.DARK)
    document.documentElement.classList.add(theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage)
  const isEnglishMode = language === LANGUAGES.EN

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, language)
    document.documentElement.lang = language
  }, [language])

  const toggleLanguageMode = useCallback(() => {
    setLanguage((prev) => (prev === LANGUAGES.EN ? LANGUAGES.ES : LANGUAGES.EN))
  }, [])

  const changeLanguage = useCallback((lang) => {
    if (lang === LANGUAGES.ES || lang === LANGUAGES.EN) {
      setLanguage(lang)
    }
  }, [])

  return (
    <LanguageContext.Provider
      value={{ language, isEnglishMode, toggleLanguageMode, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export { ThemeProvider, LanguageProvider }
