import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import TextAnimation from '../TextAnimation/TextAnimation';
import Carousel from '../Carousel/Carousel';
const Header = () => {
  const texts = [
    'visualization',
    'exploring data',
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
      red-border h-full w-full z-10 flex flex-col md:flex-row justify-center items-center'>

         <section className='red-border text-section flex flex-col justify-evenly items-center   w-[100%] h-[50%] md:w-[50%] md:h-[100%] '>
         
         <div className='flex flex-row justify-center items-center'>
          <h1 className='font-extrabold text-5xl text-white'>We are</h1>
         <TextAnimation  texts={texts} />
         </div>

          <div className='button-section w-full flex justify-evenly items-center'>
          
          <button className="button-contact">
            <p>Contact Us</p>
          </button>
          <button className='button-info'>
  <span>BUTTON</span>
</button>
        </div> 
          </section>

          <section className='red-border flex justify-center items-center carousel-section w-[100%] h-[50%] md:w-[50%] md:h-[100%]'>
              <Carousel ></Carousel>
          </section>
          


        </div>
   
 

</section>


    



    );
};

export default Header;