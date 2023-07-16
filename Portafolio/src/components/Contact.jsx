import { useContext } from "react";
import { LanguageContext } from "../providers/Context.jsx";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import flag from "../assets/Contact/Colombia.png";
import dataContact_es from "./data/DataContact/DataContact_es.json";
import dataContact_en from "./data/DataContact/DataContact_en.json";
function Contact() {
  const { language } = useContext(LanguageContext);
  const dataContact = language === "es" ? dataContact_es.es : dataContact_en.en;
  const {
    sectionTitle,
    nameLabel,
    emailLabel,
    messageLabel,
    submitButton,
    contactDetailsTitle,
    phoneNumber,
    emailAddress,
    address,
  } = dataContact;

  return (
    <section>
      <h2 className="max-w-5xl mx-auto px-4 text-3xl font-bold text-white dark:text-gray-900  mb-4 text-center">
        centrar
      </h2>
      <section id="contact" className="py-8 bg-white dark:bg-gray-900 ">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-md mx-auto py-8">
            <div className="bg-gray-200 dark:bg-indigo-950 rounded-lg shadow-md p-6">
              <h2 className="max-w-5xl mx-auto px-4 text-3xl font-bold text-gray-800 dark:text-white  mb-4 text-center">
                {sectionTitle}
              </h2>
              <form
                action="https://formsubmit.co/7a861569dcdf179c9298e77833cd56d9"
                method="POST"
              >
                <div className="mb-4">
                  <label
                    className="block mb-2 text-lg font-medium dark:text-white"
                    htmlFor="name"
                  >
                    {nameLabel}
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    type="text"
                    id="name"
                    name="name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-lg font-medium dark:text-white"
                    htmlFor="email"
                  >
                    {emailLabel}
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-lg font-medium dark:text-white"
                    htmlFor="message"
                  >
                    {messageLabel}
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    id="message"
                    rows="4"
                    name="message"
                    type="message"
                  ></textarea>
                </div>
                <button
                  className="bg-blue-500 dark:bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-slate-700"
                  type="submit"
                >
                  {submitButton}
                </button>
                <input
                  type="hidden"
                  name="_next"
                  value={"https://rad-salamander-b5e003.netlify.app/"}
                ></input>
                <input type="hidden" name="_captcha" value="false"></input>
              </form>
              <div className="mt-8 dark:text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {contactDetailsTitle}
                </h3>
                <div className="flex items-center">
                  <img
                    src={flag}
                    alt="flag"
                    className="w-6 mr-2"
                  />
                  <p className="text-lg">{phoneNumber}</p>
                </div>
                <p className="text-lg">{emailAddress}</p>
                <p className="text-lg">{address}</p>
                <div className="flex justify-center mt-8">
                  <a
                    href="https://github.com/BrayanGalindez"
                    className="justify-center text-6xl cursor-pointer ml-4 text-gray-800 dark:text-white dark:hover:text-purple-500 hover:text-purple-500 duration-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/brayangalindez24/"
                    className="justify-center  text-6xl cursor-pointer ml-4 text-gray-800 dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 duration-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Contact;
