import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {


  return (
 
    <section className="showcase">
      <div className="overlay"></div>
      <div className='absolute h-full w-full z-50 flex'>
        <div className=''>
          <h1 className='font-extrabold text-6xl text-gray-200'>Welcome to <br></br>Primeasia University <br></br> 
          Department Info</h1>
          <button className='relative left-8 top-10 h-12 bg-green-400 font-semibold text-lg w-40 text-gray-100'>Get Info</button>
        </div>
        <div className='h-96 w-[40%] bg-transparent  shadow-lg rounded-sm top-10 left-20 relative'>
          <div className='py-3 px-5 border-b-2 border-white mb-1 glassy-button'><h2 className='font-semibold text-xl text-gray-100'>Here You will Find Information About Faculties</h2></div>
          <div className='py-3 px-5 border-b-2 border-white mb-1 glassy-button'><h2 className='font-semibold text-xl text-gray-100'>Here You will Find Information About Faculties</h2></div>
          <div className='py-3 px-5 border-b-2 border-white mb-1 glassy-button'><h2 className='font-semibold text-xl text-gray-100'>Here You will Find Information About Faculties</h2></div>
          <div className='py-3 px-5 border-b-2 border-white mb-1 glassy-button'><h2 className='font-semibold text-xl text-gray-100'>Here You will Find Information About Faculties</h2></div>
          <div className='py-3 px-5 border-b-2 border-white mb-1 glassy-button'><h2 className='font-semibold text-xl text-gray-100'>Here You will Find Information About Faculties</h2></div>
          <div className='py-3 px-5 border-b-2 border-white mb-1 glassy-button'><h2 className='font-semibold text-xl text-gray-100'>Here You will Find Information About Faculties</h2></div>
        



        </div>
      </div>
 

</section>


    



    );
};

export default Header;