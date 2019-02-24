import React from 'react';
import ProjectSummary from './ProjectSummary';

export default ({ projects }) => {
  const projectSummaries = projects && projects.length ?
    projects.map(project => <ProjectSummary project={project} key={project.id} />) :
    '';

  return (
    <div className="project-list section">
      {projectSummaries}
    </div>
  );
}
