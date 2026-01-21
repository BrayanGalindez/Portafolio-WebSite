import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md'
import { useTheme } from '../../hooks/useTheme'

/**
 * Theme toggle button component
 */
const ThemeToggle = () => {
  const { toggleTheme, isDarkMode } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-slate-100 font-bold h-11 w-11 flex items-center justify-center rounded-full border border-cyan-500/20 shadow-lg shadow-cyan-500/10 hover:bg-white/90 dark:hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-200 backdrop-blur"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDarkMode}
    >
      {isDarkMode ? <MdOutlineLightMode aria-hidden="true" /> : <MdDarkMode aria-hidden="true" />}
    </button>
  )
}

export default ThemeToggle
