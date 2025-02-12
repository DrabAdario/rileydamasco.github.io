// src/pages/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  // Example project data; replace with your own projects
  const projects = [
    {
      title: "Project One",
      description: "A web application that helps users manage tasks efficiently.",
      link: "https://github.com/yourusername/project-one"
    },
    {
      title: "Project Two",
      description: "A mobile app that connects local communities for collaborative events.",
      link: "https://github.com/yourusername/project-two"
    }
  ];

  return (
    
    <section className="projects">
  <img src="my-simple-website/public/Assets/astro.gif" alt="AstroGame" width="250" />

      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="project-card">

          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>

      ))}
    </section>
  );
}

export default Projects;
