import React from 'react';
import logoSrc from '../static/image/logo.png';
import '../static/css/Header.css'

const Header = () => {
  return (
    <header className="flex items-center md:justify-between justify-center shadow py-5 sm:py-0">
        <div className='mx-3 hidden sm:block'>
        <img src={logoSrc} alt="logo" className="w-80 h-20 transform hover:scale-110" />
        </div>
      <nav className='mx-3'>
        <ul className="flex justify-center transform lg:-translate-x-20 -translate-x-0">
            <li className="mx-3">
                <a href="/" className="text-[#0c0c0c] hover:text-[#f02424]">Home</a>
            </li>
            <li className="mx-3">
                <a href="/all" className="text-[#0c0c0c] hover:text-[#f02424]">Spells</a>
            </li>
            <li className="mx-3">
                <a href="/favor" className="text-[#0c0c0c] hover:text-[#f02424]">Favourite</a>
            </li>
        </ul>

      </nav>
      <div className='mx-3'>
      </div>
    </header>
  );
};

export default Header;
