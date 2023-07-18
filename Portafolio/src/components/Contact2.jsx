import { useContext} from "react";
import { LanguageContext } from "../providers/Context.jsx";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import flag from "../assets/Contact/Colombia.png";
import dataContact_es from "./data/DataContact/DataContact_es.json";
import dataContact_en from "./data/DataContact/DataContact_en.json";
function Contact() {
  const { language } = useContext(LanguageContext);
  const dataContact = language === "es" ? dataContact_es.es : dataContact_en.en;
  const {
    contactDetailsTitle,
    phoneNumber,
    emailAddress,
    address,
  } = dataContact;
  return (
    <section>
      <section id="contact" className="py-8 bg-white dark:bg-gray-900 ">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-md mx-auto py-8">
            <div className="bg-gray-200 dark:bg-indigo-950 rounded-lg shadow-md p-6">
              <div className="mt-8 dark:text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {contactDetailsTitle}
                </h3>
                <div className="flex items-center">
                  <img src={flag} alt="flag" className="w-6 mr-2" />
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
                    className=" transition-transform transform hover:scale-105 justify-center  text-6xl cursor-pointer ml-4 text-gray-800 dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 duration-500"
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
