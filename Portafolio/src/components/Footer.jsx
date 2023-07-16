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
        
      </div>
    </footer>
  );
}

export default Footer;