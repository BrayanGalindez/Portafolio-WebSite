import { useState } from "react";
import { BsFileEarmarkText } from "react-icons/bs";
import { useContext } from "react";
import { LanguageContext } from "../providers/Context.jsx";
import dataEducation from "../components/data/DataEducation.jsx";


function Education() {
  const { language } = useContext(LanguageContext);
  const education = dataEducation[language];
  const [showMore, setShowMore] = useState({});

  const handleShowMore = (index) => {
    setShowMore((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  const handleShowLess = (index) => {
    setShowMore((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  };



  return (
    <section id="education" className="py-8 bg-white dark:bg-gray-900 ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 dark:text-white">Educación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {education.map((certification, index) => (
            <div
              key={index}
              className={`bg-gray-200 dark:bg-indigo-950 rounded-lg shadow-lg p-4 transition-transform duration-300 transform hover:scale-105 ${
                showMore[index] ? "expanded" : ""
              }`}
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                {certification.title}
              </h3>
              {showMore[index] ? null : (
                <img
                  src={certification.imageFont}
                  alt="Certificado"
                  className="h-16 float-right ml-auto mb-2 opacity-70"
                />
              )}
              {showMore[index] ? (
                <>
                  <p className="text-gray-700 dark:text-white mb-4">
                    {certification.description}
                  </p>

                  <a
                    href={certification.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-500 dark:text-white dark:hover:text-blue-600 hover:text-blue-600"
                  >
                    <BsFileEarmarkText className="w-6 h-6 mr-2" />
                    {language === "en" ? "View Certificate" : "Ver certificado"}
                  </a>
                  <button
                    onClick={() => handleShowLess(index)}
                    className="bg-blue-500 dark:bg-indigo-600 text-white font-bold px-4 py-2 rounded hover:bg-slate-700 mt-4"
                  >
                    {language === "en" ? "Show Less" : "Ver menos"}
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleShowMore(index)}
                  className="bg-blue-500 dark:bg-indigo-600 text-white font-bold px-4 py-2 rounded hover:bg-slate-700 mt-4"
                >
                  {language === "en" ? "Show More" : "Ver más"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
