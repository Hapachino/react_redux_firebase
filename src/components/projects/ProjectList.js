import React from 'react';
import { Link } from 'react-router-dom';
import ProjectSummary from './ProjectSummary';

export default ({ projects }) => {
  const projectSummaries = projects && projects.length ?
    projects.map(project => (
      <Link to={'/project/' + project.id} key={project.id}>
        <ProjectSummary project={project} />
      </Link>
    )) : 
    '';

  return (
    <div className="project-list section">
      {projectSummaries}
    </div>
  );
}
