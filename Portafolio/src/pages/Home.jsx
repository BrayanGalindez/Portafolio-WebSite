import PropTypes from "prop-types";

import About from "../components/About";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Education from "../components/Education.jsx";
import Contact from "../components/Contact.jsx";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext, LanguageContext } from "../providers/Context.jsx";
import { useContext } from "react";
function Home({ aboutRef, projectsRef, skillsRef, contactRef, educationRef }) {
  const Lenguage = () => {
    const { language, changeLanguage, isEnglishMode } =
      useContext(LanguageContext);
    const toggleLanguage = () => {
      if (language === "en") {
        changeLanguage("es");
      } else {
        changeLanguage("en");
      }
    };
    return (
      <div>
        <button
          onClick={toggleLanguage}
          className="bg-slate-600 dark:bg-white dark:text-black text-white font-bold px-4 py-2 rounded-full hover:bg-slate-700 mt-2"
        >
          {isEnglishMode ? "ES" : "EN"}
        </button>
        {/* {children} */}
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
    <div className="bg-white dark:bg-gray-900 flex-grow">
      <div  ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <ul className="fixed bottom-0 right-0 flex flex-col items-end m-4 space-y-4 mb-20">
        <li >
          <Theme/>
        </li>
        <li>
          <Lenguage/>
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
