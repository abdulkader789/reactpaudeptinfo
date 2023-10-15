import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

  faBars,

  faTimes,

} from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'
const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className=' flex py-3  relative justify-between bg-[#fafafa] nav-bg text-black'>
      <div className="relative flex justify-center items-center w-60">
        <h2 className='uppercase font-bold text-xl'>
          <Link to="/">explorer.com</Link>
        </h2>
      </div>

      <nav className={`flex p-5 bg-[#201d1d] text-white sm:text-inherit sm:bg-inherit sm:p-0 h-screen sm:h-auto nav-bg absolute w-[300px] sm:w-full sm:relative z-10  top-0 sm:top-auto flex-col sm:flex-row ${isNavOpen ? 'slide-in' : 'slide-out'
        }`}>
        <ul className='flex  flex-col sm:flex-row justify-evenly w-full relative '>
          <div className="w-32 justify-center items-center flex sm:hidden absolute right-0 top-2">
            {isNavOpen ? (
              <FontAwesomeIcon
                className=' cursor-pointer'
                icon={faTimes} // Show the faTimes (cross) icon when the nav is open
                onClick={toggleNav}
              />
            ) :
              <FontAwesomeIcon
                className=' cursor-pointer icon'
                icon={faTimes} // Show the faBars icon when the nav is closed
                onClick={toggleNav}
              />
            }
          </div>
          {/* <Link to="/">
            <li className='uppercase cursor-pointer'>Home</li>
          </Link> */}
        </ul>

        <ul className='flex w-full sm:px-2 sm:w-72 sm:justify-evenly flex-col sm:flex-row'>

          <Link to="/auth/login">
            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Register</button>
          </Link>
          <Link to="/auth/register">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
          </Link>

        </ul>

      </nav>


      <div className="w-32 justify-center items-center flex sm:hidden">
        {isNavOpen ? (
          <FontAwesomeIcon
            className='cursor-pointer'
            icon={faTimes} // Show the faTimes (cross) icon when the nav is open
            onClick={toggleNav}
          />
        ) : (
          <FontAwesomeIcon
            className=' cursor-pointer icon'
            icon={faBars} // Show the faBars icon when the nav is closed
            onClick={toggleNav}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
