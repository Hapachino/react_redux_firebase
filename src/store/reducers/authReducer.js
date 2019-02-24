import types from '../actions/types';

const DEFAULT_STATE = {
  authError: null,
};

const authReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case types.SIGNIN_ERROR:
      console.log('sign in error');
      return { ...state, authError: 'sign in failed' };
    case types.SIGNIN_SUCCESS:
      console.log('sign in success');
      return { ...state, authError: null };
    case types.SIGNOUT_ERROR:
    case types.SIGNOUT_SUCCESS:
      console.log('signout success');
      return state;
    default: 
      return state;
  }
}

export default authReducer;
