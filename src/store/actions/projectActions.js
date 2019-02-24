import types from './types';

export const createProject = project => (dispatch, getState) => {
  dispatch({ type: types.CREATE_PROJECT, project });
}
