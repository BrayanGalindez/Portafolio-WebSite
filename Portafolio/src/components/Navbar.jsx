import { useState, useEffect, useCallback } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { RiHome4Line } from 'react-icons/ri'
import PropTypes from 'prop-types'
import { useLanguage } from '../hooks/useLanguage'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { BREAKPOINTS } from '../utils/constants'
import dataNavbar_en from './data/DataNavbar/DataNavbar_en.json'
import dataNavbar_es from './data/DataNavbar/DataNavbar_es.json'

const Navbar = ({ aboutRef, skillsRef, projectsRef, educationRef, contactRef }) => {
  const { language } = useLanguage()
  const dataNavbar = language === 'es' ? dataNavbar_es.es : dataNavbar_en.en
  const { about, skills, projects, education, contact } = dataNavbar
  
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const scrollToAbout = useScrollToSection(aboutRef, { block: 'center' })
  const scrollToSkills = useScrollToSection(skillsRef, { block: 'center' })
  const scrollToProjects = useScrollToSection(projectsRef, { block: 'start' })
  const scrollToEducation = useScrollToSection(educationRef, { block: 'center' })
  const scrollToContact = useScrollToSection(contactRef, { block: 'start' })

  const handleNavClick = useCallback((scrollFn) => {
    scrollFn()
    setMenuOpen(false)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setMenuOpen(false)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= BREAKPOINTS.TABLET
      setIsMobile(mobile)
      if (!mobile) {
        setMenuOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navItems = [
    { id: 'about', label: about, ref: aboutRef, scrollFn: scrollToAbout },
    { id: 'skills', label: skills, ref: skillsRef, scrollFn: scrollToSkills },
    { id: 'projects', label: projects, ref: projectsRef, scrollFn: scrollToProjects },
    { id: 'education', label: education, ref: educationRef, scrollFn: scrollToEducation },
    { id: 'contact', label: contact, ref: contactRef, scrollFn: scrollToContact }
  ]

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 px-4 py-2 bg-gradient-to-r from-white/70 via-white/60 to-white/70 dark:from-slate-950/70 dark:via-slate-900/70 dark:to-slate-950/70 backdrop-blur border-b border-cyan-500/10 shadow-lg"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="relative flex items-center justify-between md:gap-6">
        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-white/70 dark:bg-slate-900/70 px-2 py-1.5 shadow-md shadow-cyan-500/10 transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          aria-label="Go to top"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/10 to-cyan-500/20 text-cyan-600 dark:text-cyan-400 group-hover:text-fuchsia-400 transition-colors">
            <RiHome4Line aria-hidden="true" className="text-xl" />
          </span>
          <span className="hidden lg:inline text-sm font-semibold text-slate-800 dark:text-slate-100">
            Home
          </span>
        </button>

        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-3xl text-slate-900 dark:text-slate-100 ml-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 rounded p-1"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <AiOutlineClose aria-hidden="true" /> : <AiOutlineMenu aria-hidden="true" />}
          </button>
        )}
        <ul
          className={`${
            menuOpen || !isMobile
              ? 'opacity-100 max-h-screen pointer-events-auto'
              : 'opacity-0 max-h-0 pointer-events-none'
          } absolute left-0 right-0 top-full mt-2 rounded-2xl bg-white/90 dark:bg-slate-950/90 backdrop-blur shadow-lg px-4 md:px-0 transition-all ease-in duration-500 overflow-hidden md:opacity-100 md:max-h-none md:pointer-events-auto md:static md:flex md:flex-nowrap md:items-center md:gap-4 md:bg-transparent md:dark:bg-transparent md:backdrop-blur-0 md:border-0 md:shadow-none md:mt-0 md:ml-auto md:rounded-none`}
          role="menubar"
        >
          {navItems.map((item) => (
            <li key={item.id} className="my-4 md:my-0" role="none">
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.scrollFn)
                }}
                className="text-xl text-slate-900 dark:text-slate-100 dark:hover:text-fuchsia-400 hover:text-cyan-500 duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 rounded px-2 py-1"
                role="menuitem"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  aboutRef: PropTypes.object.isRequired,
  projectsRef: PropTypes.object.isRequired,
  skillsRef: PropTypes.object.isRequired,
  educationRef: PropTypes.object.isRequired,
  contactRef: PropTypes.object.isRequired
}

export default Navbar
