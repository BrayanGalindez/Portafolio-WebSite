import { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'
import ThemeToggle from '../components/ui/ThemeToggle'
import LanguageToggle from '../components/ui/LanguageToggle'
import BackgroundParticles from '../components/ui/BackgroundParticles'
import { useTheme } from '../hooks/useTheme'

// Lazy load components for better performance
const About = lazy(() => import('../components/About'))
const Skills = lazy(() => import('../components/Skills'))
const Projects2 = lazy(() => import('../components/Projects2'))
const Education = lazy(() => import('../components/Education'))
const Contact2 = lazy(() => import('../components/Contact2'))
const Footer = lazy(() => import('../components/Footer'))

const LoadingFallback = () => (
  <div className="flex justify-center items-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
  </div>
)

const Home = ({ aboutRef, projectsRef, skillsRef, contactRef, educationRef }) => {
  const { isDarkMode } = useTheme()

  return (
    <div className="relative flex-grow text-slate-900 dark:text-slate-100">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-50 via-slate-50 to-fuchsia-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="absolute inset-0 -z-10 opacity-70">
        <BackgroundParticles mode={isDarkMode ? 'dark' : 'light'} />
      </div>
      <Navbar
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        educationRef={educationRef}
        contactRef={contactRef}
      />

      <main className="relative">
        <div className="mt-20" ref={aboutRef}>
          <Suspense fallback={<LoadingFallback />}>
            <About />
          </Suspense>
        </div>
        <div ref={skillsRef}>
          <Suspense fallback={<LoadingFallback />}>
            <Skills />
          </Suspense>
        </div>
        <div ref={projectsRef}>
          <Suspense fallback={<LoadingFallback />}>
            <Projects2 />
          </Suspense>
        </div>
        <div ref={educationRef}>
          <Suspense fallback={<LoadingFallback />}>
            <Education />
          </Suspense>
        </div>
        <div ref={contactRef}>
          <Suspense fallback={<LoadingFallback />}>
            <Contact2 />
          </Suspense>
        </div>
      </main>

      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>

      <nav 
        className="fixed bottom-0 right-0 flex flex-col items-end m-4 space-y-4 mb-20 z-40"
        aria-label="Theme and language controls"
      >
        <ThemeToggle />
        <LanguageToggle />
      </nav>
    </div>
  )
}

Home.propTypes = {
  aboutRef: PropTypes.object.isRequired,
  projectsRef: PropTypes.object.isRequired,
  skillsRef: PropTypes.object.isRequired,
  educationRef: PropTypes.object.isRequired,
  contactRef: PropTypes.object.isRequired
}

export default Home
