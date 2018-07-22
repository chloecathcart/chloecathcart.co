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

  return (
    <Link className="button" to={`/projects/${project.id}`}>
      View Project→
    </Link>
  );
};

function Projects() {
  return (
    <ul className="projects">
      {projects.map(project => (
        <li key={project.id} className="project">
          <div className="project-content">
            {project.images && project.images.length ? (
              <Slider images={project.images} />
            ) : (
              <img src={project.image} />
            )}

            <h2>{project.name}</h2>
            <p dangerouslySetInnerHTML={{ __html: project.caption }} />

            {renderLink(project)}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Projects;
