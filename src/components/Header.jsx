// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold">Sidhu</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
