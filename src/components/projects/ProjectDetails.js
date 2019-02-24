import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = props => {
  const { project } = props;

  if (project) {
    const { title, content, authorFirstName, authorLastName } = project;

    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {authorFirstName} {authorLastName}</div>
            <div>2nd December, 6am</div>
          </div>
        </div>
      </div>
    );
  }

  return <div className="container">Loading...</div>;
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  
  return {
    project,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ]),
)(ProjectDetails);


