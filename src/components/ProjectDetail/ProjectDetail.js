import React, { Component } from 'react';
import projects from 'data/projects';
import Slider from 'Slider/Slider';

function ProjectDetail(props) {

  var project = projects.filter(project => project.id === props.params.id)[0];

  return (
    <div class="project-detail">
      <div id="hero-content">
        <h1>{project.name}</h1>
        <p>{project.body || project.caption}</p>

        {project.images && project.images.length ?
          <Slider images={project.images} />
        : <img src={project.image} />
      }
      </div>
    </div>
  );
}

export default ProjectDetail;
