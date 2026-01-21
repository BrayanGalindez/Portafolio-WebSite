import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { useLanguage } from '../hooks/useLanguage'
import Section from './ui/Section'
import flag from '../assets/Contact/Colombia.png'
import dataContact_es from './data/DataContact/DataContact_es.json'
import dataContact_en from './data/DataContact/DataContact_en.json'

const Contact = () => {
  const { language } = useLanguage()
  const dataContact = language === 'es' ? dataContact_es.es : dataContact_en.en
  const { contactDetailsTitle, phoneNumber, emailAddress, address } = dataContact

  return (
    <Section id="contact">
      <div className="max-w-md mx-auto py-8">
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur rounded-2xl border border-cyan-500/10 shadow-lg p-6 mx-4 md:mx-0">
          <div className="mt-8 dark:text-white">
            <h3 className="text-2xl font-bold mb-4">{contactDetailsTitle}</h3>
            <address className="not-italic">
              <div className="flex items-center mb-2">
                <img src={flag} alt="Colombia flag" className="w-6 mr-2" loading="lazy" />
                <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="text-lg hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 rounded">
                  {phoneNumber}
                </a>
              </div>
              <a 
                href={`mailto:${emailAddress}`} 
                className="text-lg block mb-2 hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 rounded"
              >
                {emailAddress}
              </a>
              <p className="text-lg">{address}</p>
            </address>
            <div className="flex justify-center gap-6 mt-8" role="list" aria-label="Social media links">
              <a
                href="https://github.com/BrayanGalindez"
                className="text-6xl text-slate-900 dark:text-white dark:hover:text-fuchsia-400 hover:text-fuchsia-500 duration-500 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500 rounded"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                role="listitem"
              >
                <AiFillGithub aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/brayangalindez24/"
                className="text-6xl text-slate-900 dark:text-white dark:hover:text-cyan-400 hover:text-cyan-500 duration-500 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 rounded"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                role="listitem"
              >
                <AiFillLinkedin aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Contact
