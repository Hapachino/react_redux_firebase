import React from 'react';

export default props => {
  const { id } = props.match.params;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat reiciendis, necessitatibus fugit dolor error ullam.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Erick</div>
          <div>2nd December, 6am</div>
        </div>
      </div>
    </div>
  );
}
