import { useRef } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Navbar from "../src/components/Navbar.jsx";
import Footer from "../src/components/Footer.jsx";
import Home from "../src/pages/Home.jsx";

function App() {
  // Definir las referencias de los componentes
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <BrowserRouter>
      <div id="root" className="flex flex-col min-h-screen">
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
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;