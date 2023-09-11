import React from 'react';
import './NavigationBar.css'
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className="w-full flex py-5 nav-bg">
    
        <div className="w-[30%] flex justify-center items-center">
        <h2><Link to="/">PauDeptInfo</Link></h2>
        </div>
   
        <div className="w-[70%]">
          <ul className='flex justify-evenly'>
            <li>
            <Link to="/">Home</Link>            </li>
            <li>
            <Link to="/Cse">Cse</Link>            </li>
            <li>
            <Link to="/Contact">Login</Link>            </li>
            <li>
             <Link to="/login">Login</Link>
            </li>
           
          </ul>
        </div>
   
    </nav>
    );
};

export default NavigationBar;