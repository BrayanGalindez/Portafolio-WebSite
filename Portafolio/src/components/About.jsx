// import React from 'react';
import foto from "../assets//About/goku.png";
function About() {
  return (
    <section id="about" className="bg-gray-200 py-8">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-5xl mx-auto py-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Hola, soy Brayan Galindez
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            Soy desarrollador web y actualmente estoy estudiando Ingeniería de
            Sistemas y Computación. Poseo habilidades en el desarrollo
            FullStack, lo que me permite crear sitios web funcionales en todas
            sus capas, desde el frontend hasta el backend. Estoy constantemente
            aprendiendo y mejorando mis habilidades para estar al tanto de las
            últimas tecnologías y tendencias en el campo del desarrollo web.
            Estoy emocionado de poner en práctica mis habilidades y
            conocimientos en proyectos emocionantes y desafiantes.
          </p>
          <button className="bg-slate-600 text-white font-[Poppins] duration-500 px-6 py-2 hover:bg-slate-700 rounded">
            Hoja de vida
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg w-64 h-64 ">
          <div className="h-64 flex items-center justify-center">
            <img src={foto} alt="Mi foto" className="rounded-t-lg" />
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
