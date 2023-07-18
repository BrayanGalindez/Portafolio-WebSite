import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills.jsx";
// import Projects from "../components/Projects.jsx";
import Projects2 from "../components/Projects2";
import Education from "../components/Education.jsx";
import Contact from "../components/Contact.jsx";
import Contact2 from "../components/Contact2.jsx";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext, LanguageContext } from "../providers/Context.jsx";
import { useContext, useState, useEffect } from "react";
import Footer from "../components/Footer";
function Home({ aboutRef, projectsRef, skillsRef, contactRef, educationRef }) {
  const Lenguage = () => {
    const { language, toggleLanguageMode, isEnglishMode } = useContext(LanguageContext);
    const [languageReady, setLanguageReady] = useState(false);
    useEffect(() => {
      if (language) {
        setLanguageReady(true);
      }
    }, [language]);

    if (!languageReady) {
      return null; // O muestra un estado de carga si lo prefieres
    }

    return (
      <div>
        <button
          onClick={toggleLanguageMode}
          className="bg-slate-600 dark:bg-white dark:text-black text-white font-bold px-4 py-2 rounded-full hover:bg-slate-700 mt-2"
        >
          {isEnglishMode ? "ES" : "EN"}
        </button>
      </div>
    );
  };
  const Theme = () => {
    const { toggleTheme, isDarkMode } = useContext(ThemeContext);
    return (
      <div>
        <button
          onClick={toggleTheme}
          className="bg-slate-600 dark:bg-white dark:text-black text-white font-bold px-4 py-2 rounded-full hover:bg-slate-700 mt-2"
        >
          {isDarkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>
      </div>
    );
  };
  return (
    <div className="bg-white dark:bg-gray-900 flex-grow ">
      <div>
        <Navbar
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          educationRef={educationRef}
          contactRef={contactRef}
        />
      </div>

      <div className="mt-20" ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects2 />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={contactRef}>
        <Contact2 />
      </div>
      <div>
        <Footer />
      </div>
      <></>
      <ul className="fixed bottom-0 right-0 flex flex-col items-end m-4 space-y-4 mb-20">
        <li>
          <Theme />
        </li>
        <li>
          <Lenguage />
        </li>
      </ul>
    </div>
  );
}
Home.propTypes = {
  aboutRef: PropTypes.object,
  projectsRef: PropTypes.object,
  skillsRef: PropTypes.object,
  educationRef: PropTypes.object,
  contactRef: PropTypes.object,
};
export default Home;
