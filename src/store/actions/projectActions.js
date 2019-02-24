import types from './types';

export const createProject = project => (
  async (dispatch, getState, { getFirebase, getFirestore }) => {
    const fs = getFirestore();

    try {
      fs.collection('projects').add({
        ...project,
        authorFirstName: 'Erick',
        authorLastName: 'Brownfield',
        authorId: 12345,
        createdAt: new Date(),
      });

      dispatch({
        type: types.CREATE_PROJECT,
        project,
      });
    } catch (err) {
      dispatch({
        type: types.CREATE_PROJECT_ERROR,
        err,
      });
    }

  }
);
