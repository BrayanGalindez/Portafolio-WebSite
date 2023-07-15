import PropTypes from "prop-types";

import About from "../components/About";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Education from "../components/Education.jsx";
import Contact from "../components/Contact.jsx";

function Home({ aboutRef, projectsRef, skillsRef, contactRef, educationRef }) {
  return (
    <div className="bg-white dark:bg-gray-900 flex-grow">
      <div ref={aboutRef}>
        <About />
      </div>
      <div className="mt-16" ref={skillsRef}>
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
