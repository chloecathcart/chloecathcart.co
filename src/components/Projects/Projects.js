import React, { Component } from 'react';
import { Link } from 'react-router';
import projects from 'data/projects';
import Slider from 'Slider/Slider';

const renderLink = (project) => {

  if (!project.link) return null;

  if (project.external) {
    return (
      <a href={project.external} target="_blank">
        View Project
      </a>
    );
  } else {
    return (
      <Link to={`/projects/${project.id}`}>
        View Project
      </Link>
    )
  }
}

function Projects() {
  return (
		<ul class="projects">

      {projects.map(project =>
        <li class="project" key={project.id}>
          <div class="project-content">
            {project.images && project.images.length ?
              <Slider images={project.images} />
            : <img src={`/public/${project.image}`} />}

            <h2>{project.name}</h2>
            <p>{project.caption}</p>

            {renderLink(project)}
          </div>
        </li>
      )}

		</ul>
  );
}

export default Projects;
