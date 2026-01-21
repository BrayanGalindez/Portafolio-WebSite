import { useLanguage } from '../../hooks/useLanguage'

/**
 * Language toggle button component
 */
const LanguageToggle = () => {
  const { toggleLanguageMode, isEnglishMode } = useLanguage()

  return (
    <button
      onClick={toggleLanguageMode}
      className="bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-slate-100 font-bold h-11 w-11 flex items-center justify-center rounded-full border border-cyan-500/20 shadow-lg shadow-cyan-500/10 hover:bg-white/90 dark:hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-200 backdrop-blur"
      aria-label={isEnglishMode ? 'Switch to Spanish' : 'Switch to English'}
      aria-pressed={!isEnglishMode}
    >
      {isEnglishMode ? 'ES' : 'EN'}
    </button>
  )
}

export default LanguageToggle
