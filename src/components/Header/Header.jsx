import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {


  return (
 
    <section className="showcase">
      <div className="overlay"></div>
      <div className='absolute h-full w-full z-10 flex items-center'>
        <div className=''>
          <h1 className='text-white '><span className='font-bold text-3xl'>Welcome to</span><br></br>
          <span className='font-extrabold text-5xl'>Primeasia University</span><br></br>
          <span className='font-bold text-3xl'>Department Info</span></h1>
          <Link to='/paudeptinfo'><button className='relative left-8 top-10 h-12 bg-green-400 font-semibold text-lg w-40 text-gray-100'>Get Info</button>
        </Link>
        </div>
       
      </div>
 

</section>


    



    );
};

export default Header;