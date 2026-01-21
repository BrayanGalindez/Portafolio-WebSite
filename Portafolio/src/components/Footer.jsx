import { CiLocationOn } from 'react-icons/ci'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="p-5 bg-white/70 dark:bg-slate-900/70 backdrop-blur border-t border-cyan-500/10 shadow md:flex md:items-center md:justify-between bottom-0 w-full relative"
      role="contentinfo"
    >
      <div className="flex justify-between items-center flex-grow">
        <div className="flex items-center flex-grow">
          <CiLocationOn 
            className="text-3xl ml-2 text-slate-900 dark:text-white dark:hover:text-fuchsia-400 hover:text-fuchsia-500 duration-500"
            aria-hidden="true"
          />
          <address className="text-xl text-slate-900 dark:text-white not-italic ml-2">
            Colombia, Bogotá
          </address>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {currentYear} BrayanDev. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer