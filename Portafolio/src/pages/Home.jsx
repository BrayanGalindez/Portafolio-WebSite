import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
function Home() {
  return (
    
    <div className="bg-gray-200 flex-grow">
      <div className="mb-8">
        <About />
      </div>
      <div className="mb-8">
        <Skills />
      </div>
      <div className="mb-8">
        <Projects />
      </div>
      <div className="mb-8">
        <Education />
      </div>
      <div className="mb-8">
        <Contact />
      </div>
    </div>
  );
}

export default Home;