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

      dispatch({ type: types.SIGNIN_SUCCESS });

    } catch(err) {
      dispatch({ type: types.SIGNIN_ERROR, err });
    }
  }
);

export const signOut = () => (
  async (dispatch, getState, { getFirebase }) => {
    try {
      const fb = getFirebase();

      await fb.auth().signOut();

      dispatch({ type: types.SIGNOUT_SUCCESS });
    } catch(err) {

    }
  }
);
