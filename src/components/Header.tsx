import React from 'react';
import { Link } from 'react-router-dom';
import logoSrc from '../static/image/logo.png';
import '../static/css/Header.css'

const Header = () => {
  return (
    <header className="flex items-center md:justify-between justify-center shadow-lg drop-shadow-sm py-5 sm:py-0">
        <div className='mx-3 hidden sm:block'>
        <img src={logoSrc} alt="logo" className="w-80 h-20 transform hover:scale-110" />
        </div>
      <nav className='mx-3'>
        <ul className="flex justify-center transform lg:-translate-x-20 -translate-x-0">
            <li className="mx-3">
                <Link to="/"><button className="text-[#0c0c0c] hover:text-[#f02424]">Home</button></Link>
            </li>
            <li className="mx-3">
                <Link to="/all"><button className="text-[#0c0c0c] hover:text-[#f02424]">Spells</button></Link>
            </li>
            <li className="mx-3">
                <Link to="/favor"><button className="text-[#0c0c0c] hover:text-[#f02424]">Favourite</button></Link>
            </li>
        </ul>

      </nav>
      <div className='mx-3'>
      </div>
    </header>
  );
};

export default Header;
