import types from './types';

export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({ type: types.CREATE_PROJECT, project });
  }
}
