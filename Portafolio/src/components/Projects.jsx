// import { AiFillGithub } from "react-icons/ai";
// import { BsLink45Deg } from "react-icons/bs";
// import { BiLogoReact } from "react-icons/bi";
// import { LiaNodeJs } from "react-icons/lia";
// import { BiLogoTailwindCss } from "react-icons/bi";
// import { BiLogoMongodb } from "react-icons/bi";
// import { SiFastapi } from "react-icons/si";
// import { BiLogoJavascript } from "react-icons/bi";
// import { AiFillHtml5 } from "react-icons/ai";
// import { BiLogoCss3 } from "react-icons/bi";
// import { BiLogoBootstrap } from "react-icons/bi";
// import { SiVite } from "react-icons/si";

// import { useContext } from "react";
// import { LanguageContext } from "../providers/Context.jsx";
// import dataProjects from "../components/data/DataAbout.jsx";

// function Projects() {
//   const { language } = useContext(LanguageContext);
//   const { title, image, description, githubLink, webLink, status, technologies } = dataProjects[language];

//   return (
//     <section id="projects" className="py-8 bg-white dark:bg-gray-900 ">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="max-w-5xl mx-auto px-4 text-3xl font-bold text-gray-800 dark:text-white mb-4">
//           Proyectos
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-gray-200 dark:bg-indigo-950 rounded-lg shadow-lg p-4 transition-transform duration-300 transform hover:scale-105 relative"
//             >
//               <div
//                 className={`status-badge ${
//                   project.status === "Finalizado"
//                     ? "bg-green-500 rounded-full"
//                     : "bg-blue-500 rounded-full "
//                 } absolute top-0 right-0 p-2 text-xs mt-2 mr-2 text-white font-bold`}
//               >
//                 {project.status}
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
//                 {project.title}
//               </h3>

//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-auto mb-4"
//               />
//               <p className="text-gray-700 dark:text-white mb-4">{project.description}</p>
//               <ul className="flex justify-center space-x-4">
//                 {project.technologies.map((technology, index) => (
//                   <li key={index} className="text-4xl">
//                     {technology === "react" && <BiLogoReact />}
//                     {technology === "node.js" && <LiaNodeJs />}
//                     {technology === "tailwind" && <BiLogoTailwindCss />}
//                     {technology === "mongodb" && <BiLogoMongodb />}
//                     {technology === "fastapi" && <SiFastapi />}
//                     {technology === "html" && <AiFillHtml5 />}
//                     {technology === "js" && <BiLogoJavascript />}
//                     {technology === "css" && <BiLogoCss3 />}
//                     {technology === "bootstrap" && <BiLogoBootstrap />}
//                     {technology === "vite" && <SiVite />}
//                     {/* Agrega más condiciones para otros iconos de tecnologías */}
//                   </li>
//                 ))}
//               </ul>
//               <div className="flex justify-center space-x-4 mt-4">
//                 <a
//                   href={project.githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
//                 >
//                   <AiFillGithub className="w-6 h-6" />
//                 </a>
//                 <a
//                   href={project.webLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                 >
//                   <BsLink45Deg className="w-6 h-6" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;

import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { BiLogoReact } from "react-icons/bi";
import { LiaNodeJs } from "react-icons/lia";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { SiFastapi } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoBootstrap } from "react-icons/bi";
import { SiVite } from "react-icons/si";

import { useContext } from "react";
import { LanguageContext } from "../providers/Context.jsx";
import dataProjects from "../components/data/DataProjects.jsx";

function Projects() {
  const { language } = useContext(LanguageContext);
  const projects = dataProjects[language];

  return (
    <section id="projects" className="py-8 bg-white dark:bg-gray-900 ">
      <div className="max-w-5xl mx-auto">
        <h2 className="max-w-5xl mx-auto px-4 text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-indigo-950 rounded-lg shadow-lg p-4 transition-transform duration-300 transform hover:scale-105 relative"
            >
              <div
                className={`status-badge ${
                  project.status === "Finalizado"
                    ? "bg-green-500 rounded-full"
                    : "bg-blue-500 rounded-full "
                } absolute top-0 right-0 p-2 text-xs mt-2 mr-2 text-white font-bold`}
              >
                {project.status}
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-4"
              />
              <p className="text-gray-700 dark:text-white mb-4">{project.description}</p>
              <ul className="flex justify-center space-x-4">
                {project.technologies.map((technology, index) => (
                  <li key={index} className="text-4xl">
                    {technology === "react" && <BiLogoReact />}
                    {technology === "node.js" && <LiaNodeJs />}
                    {technology === "tailwind" && <BiLogoTailwindCss />}
                    {technology === "mongodb" && <BiLogoMongodb />}
                    {technology === "fastapi" && <SiFastapi />}
                    {technology === "html" && <AiFillHtml5 />}
                    {technology === "js" && <BiLogoJavascript />}
                    {technology === "css" && <BiLogoCss3 />}
                    {technology === "bootstrap" && <BiLogoBootstrap />}
                    {technology === "vite" && <SiVite />}
                    {/* Agrega más condiciones para otros iconos de tecnologías */}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
                >
                  <AiFillGithub className="w-6 h-6" />
                </a>
                <a
                  href={project.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  <BsLink45Deg className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;