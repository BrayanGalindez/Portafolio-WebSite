import { useRef } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const educationRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen overflow-hidden sm:overflow-auto">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                aboutRef={aboutRef}
                projectsRef={projectsRef}
                skillsRef={skillsRef}
                educationRef={educationRef}
                contactRef={contactRef}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App