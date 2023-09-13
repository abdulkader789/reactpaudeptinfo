import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {


  return (
 
    <section className="showcase">
      <div className="overlay"></div>
      <div className='h-full px-5  flex flex-col lg:flex-row md:flex-wrap items-center justify-evenly'>
     
      <Link to="/faculty" className='block w-full  md:w-[50%] lg:w-[33%] '>
        
        <div className='py-16     border-shadow bg-faculty    relative z-10 flex justify-center items-center '>
          <h2 className='text-white font-bold text-2xl relative z-20'>Faulty Members</h2>
        </div>
      </Link>
      <Link to="club" className='block w-full md:w-[50%] lg:w-[33%] '>
          <div className='py-16  border-shadow bg-club    relative z-10 flex justify-center items-center'>
            <h2 className='text-white font-bold text-2xl relative z-20'>Club Members</h2>
          </div>
      </Link>
      <Link to="others" className='block w-full md:w-[50%] lg:w-[33%]'>
          <div className='py-16  border-shadow bg-others  relative z-10 flex justify-center items-center'>
            <h2 className='text-white font-bold text-2xl relative z-20'>Other Members</h2>
          </div>
      </Link>
    

      </div>
 

</section>


    



    );
};

export default Header;