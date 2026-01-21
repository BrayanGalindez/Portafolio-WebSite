import { useLanguage } from '../hooks/useLanguage'
import Section from './ui/Section'
import Button from './ui/Button'
import cv from '../assets/About/CV.pdf'
import dataAbout_es from './data/DataAbout/DataAbout_es.json'
import dataAbout_en from './data/DataAbout/DataAbout_en.json'

const About = () => {
  const { language } = useLanguage()
  const dataAbout = language === 'es' ? dataAbout_es.es : dataAbout_en.en
  const { greeting, description, button } = dataAbout

  const handleOpenCV = () => {
    window.open(cv, '_blank', 'noopener,noreferrer')
  }

  return (
    <Section id="about" title={greeting}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="max-w-full mx-auto py-8 md:py-0">
          <p className="text-xl text-slate-700 dark:text-slate-200 mb-4">
            {description}
          </p>
          <Button
            onClick={handleOpenCV}
            ariaLabel={button}
          >
            {button}
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default About
