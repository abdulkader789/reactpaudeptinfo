import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import TextAnimation from '../TextAnimation/TextAnimation';
import Carousel from '../Carousel/Carousel';
const Header = () => {
  const texts = [
    'research and innovation',
    'expand campus facilities',
    'live code',
    'the web',
    'interactive essays',
    'clear computation',
    'learning algorithms',
    'coding together',
  ];

  return (
 
    <section className="showcase ">
      <div className="overlay"></div>
      <div className='relative  
     h-full w-full z-10 flex flex-col justify-center items-center'>

         <section className=' text-section flex flex-col justify-evenly items-center   w-[100%] '>
         
         <div className='relative top-5'>
              <TextAnimation  texts={texts} />
         </div>

          {/* <div className='button-section w-full flex justify-evenly items-center'>
          
          <button> Hover me</button>
          <button><span> Button</span></button>
        </div>  */}
          </section>

          <section className='relative top-14 flex justify-center items-center carousel-section w-[100%] px-48'>
              <Carousel ></Carousel>
          </section>
          


        </div>
   
 

</section>


    



    );
};

export default Header;