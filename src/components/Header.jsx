// Header.js
import React, { useEffect, useState } from "react";

const Header = () => {
  const links = ["Home", "About", "Projects", "Services", "Contact"];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <header className="relative flex justify-center gap-[40rem] items-center p-6 bg-[#0E0F19]  text-white">
      {/* Glowing Effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-[#0E0F19] via-[#1c1f30] to-transparent opacity-90" />
      <div className="absolute inset-0 -z-20 blur-3xl bg-[#0E0F19] rounded-fall opacity-80" />

      <h1 className="text-xl font-semibold">Sridhar</h1>
      <nav>
        <ul className="flex space-x-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className={`text-sm font-semibold tracking-widest ${
                activeIndex === index ? "text-white" : "text-gray-400"
              }`}
              onClick={() => {
                handleClick(index);
              }}
            >
              {link}
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
