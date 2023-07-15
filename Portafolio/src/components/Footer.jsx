import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';

function Footer() {
  return (
    <footer className="p-5 bg-white dark:bg-gray-900 shadow md:flex md:item-center md:justify-between bottom-0 w-full relative">
      <div className="flex justify-between items-center flex-grow">
        <div className="flex items-center flex-grow">
          <a className="text-3xl ml-2 text-gray-800 dark:text-white dark:hover:text-red-500 hover:text-red-500 duration-500">
            <CiLocationOn />
          </a>
          <a className='text-xl text-gray-800 dark:text-white'>Colombia-Bogota</a>
        </div>
        <div className="flex">
          <a
            href="https://github.com/BrayanGalindez"
            className="text-3xl cursor-pointer ml-2 text-gray-800 dark:text-white dark:hover:text-purple-500 hover:text-purple-500 duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/brayangalindez24/"
            className="text-3xl cursor-pointer ml-2 text-gray-800 dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 duration-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;