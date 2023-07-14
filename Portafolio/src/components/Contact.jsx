// import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-8">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-md mx-auto py-8">
          <h2 className="max-w-5xl mx-auto px-4 text-3xl font-bold text-gray-800 mb-4">
            Contactame
          </h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2 text-lg font-medium" htmlFor="name">
                Nombre
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                id="name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-lg font-medium" htmlFor="email">
                Correo electrónico
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="email"
                id="email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-lg font-medium"
                htmlFor="message"
              >
                Mensaje
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                id="message"
                rows="4"
              ></textarea>
            </div>
            <button
              className="bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-700"
              type="submit"
            >
              Enviar
            </button>
          </form>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2">Detalles de contacto</h3>
            <p>Teléfono:+573156644896</p>
            <p>Correo electrónico: brayantobo@gmail.com</p>
            <p>Dirección: Bogota, Colombia</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
