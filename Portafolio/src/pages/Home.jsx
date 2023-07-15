// import About from "../components/About";
import Skills from "../components/Skills";
// import Projects from "../components/Projects";
import Education from "../components/Education";
// import Contact from "../components/Contact";
function Home() {
  return (
      <div className="bg-gray-200 flex-grow">
        <div >
          {/* <About /> */}
        </div>
        <div >
          <Skills />
        </div>
        <div >
          {/* <Projects /> */}
        </div>
        <div >
          <Education />
        </div>
        <div >
          {/* <Contact /> */}
        </div>
      </div>
  );
}

export default Home;
