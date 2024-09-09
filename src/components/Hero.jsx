// Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-10">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Sidhu</h1>
      <p className="text-lg text-gray-700 mb-6">I'm a Web Developer specializing in React and Tailwind CSS</p>
      <img 
        src="/path-to-your-image.jpg" 
        alt="Profile" 
        className="rounded-full w-40 h-40 mb-4"
      />
      <a href="#projects" className="text-xl text-white bg-blue-500 px-4 py-2 rounded">
        View My Work
      </a>
    </section>
  );
};

export default Hero;
