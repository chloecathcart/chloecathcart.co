import React from 'react';
import projects from 'data/projects';
import Slider from 'Slider/Slider';
import MobileVideo from 'MobileVideo/MobileVideo';

const renderSlider = (project) => (
  project.images && project.images.length ?
    <Slider images={project.images} />
  : <img role="presentation" src={project.image} />
);

function ProjectDetail(props) {

  var project = projects.filter(project => project.id === props.params.id)[0];

  return (
    <div class="project-detail">
      <div>
        <h1>{project.name}</h1>
        <p>{project.body || project.detail}</p>

        <div class="project-detail-content">
          <div id="tex-container">
            <h2>{project.heading}</h2>
            <p>{project.subheading}</p>
            <ul>
              <li>{project.pointone}</li>
              <li>{project.pointtwo}</li>
            </ul>
          </div>
          <div id="video-container">
            {project.video ?
              <MobileVideo
                src={project.video}
                poster={project.poster} />
            : null}

            {/* renderSlider(project) */}
          </div>
        </div>
        <h2>{project.heading}</h2>
        <p>{project.subheading}</p>
      </div>
    </div>
  );
}

export default ProjectDetail;
