import foto from "../assets//About/perfil.png";
import { useContext } from "react";
import { LanguageContext } from "../providers/Context.jsx";
import dataAbout_es from "./data/DataAbout/DataAbout_es.json";
import dataAbout_en from "./data/DataAbout/DataAbout_en.json";

function About() {
  const { language } = useContext(LanguageContext);
  const dataSkills = language === "es" ? dataAbout_es.es : dataAbout_en.en;
  const { greeting, description, button  } = dataSkills;
  return (
    <section className="bg-white py-8 dark:bg-gray-900 mt-16">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-5xl mx-auto py-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            {greeting}
          </h2>
          <p className="text-xl text-gray-700 dark:text-white mb-4">
            {description}
          </p>
          <button className="bg-blue-500 dark:bg-indigo-600 text-white dark:text-white font-[Poppins] duration-500 px-6 py-2 hover:bg-slate-700 rounded">
            {button}
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg w-64 h-64 mt-20">
          <div className="h-64 flex items-center justify-center">
            <img src={foto} alt="Mi foto" className="rounded-t-lg " />
          </div>

          <div className="p-4">
            {/* Puedes agregar más información en la tarjeta si lo deseas */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
