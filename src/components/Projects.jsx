// Projects.js
import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'A web app built with React and Tailwind CSS.',
    github: 'https://github.com/your-project',
    demo: 'https://your-live-demo.com',
  },
  {
    title: 'Project 2',
    description: 'A full-stack application using MERN stack.',
    github: 'https://github.com/your-project',
    demo: 'https://your-live-demo.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-10 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-lg text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-around">
              <a href={project.github} className="text-blue-500" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} className="text-blue-500" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
