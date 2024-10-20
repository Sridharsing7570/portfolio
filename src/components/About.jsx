// About.js
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-8">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <img
            src="your-photo-url.jpg" // Replace with your actual photo URL
            alt="Profile"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-white"
          />
          <div className="max-w-md text-center md:text-left">
            <p className="text-lg text-gray-700 mb-4">
              I'm a passionate web developer with experience in JavaScript,
              React, and Tailwind CSS. I love creating dynamic and responsive
              websites that provide great user experiences. I am always eager to
              learn and improve my skills.
            </p>
            <h3 className="text-2xl font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>API Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
