import React from 'react';

export default ({ project }) => {
  const { title } = project;

  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>Posted by Erick</p>
        <p className="grey-text">2nd December, 6am</p>
      </div>
    </div>
  );
}
