import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../../data/projects';
import Slider from '../Slider/Slider';

const renderLink = project => {
  if (!project.link) return null;

  if (project.external) {
    return (
      <a
        className="button"
        href={project.external}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project <i className="icon-export" />
      </a>
    );
  }
};

function Projects() {
  return (
    <ul className="projects slider">
      {projects.map(project => (
        <li key={project.id} className="project slider">
          <div className="project-content">
            
            <h3>{project.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: project.caption }} />
            <h5 dangerouslySetInnerHTML={{ __html: project.tag }} />

            {renderLink(project)}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Projects;
