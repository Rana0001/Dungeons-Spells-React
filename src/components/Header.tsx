import React from 'react';
import logoSrc from '../static/image/logo.png';

const Header = () => {
  return (
    <header className="flex justify-center items-center shadow shadow-[#f02424]">
      <img src={logoSrc} alt="logo" className="w-80 h-20 hover:animate-bounce" />
    </header>
  );
};

export default Header;
