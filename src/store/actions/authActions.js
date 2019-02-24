import types from './types';

export const signIn = credentials => (
  async (dispatch, getState, { getFirebase }) => {
    try {
      const { email, password } = credentials;
      const fb = getFirebase();

      await fb.auth().signInWithEmailAndPassword(
        email,
        password,
      )

      dispatch({ type: types.LOGIN_SUCCESS });

    } catch(err) {
      dispatch({ type: types.LOGIN_ERROR, err });
    }
  }
);
