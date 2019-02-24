import types from '../actions/types';

const DEFAULT_STATE = {
  authError: null,
};

const authReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case types.LOGIN_SUCCESS:
      console.log('login success');
      return { ...state, authError: null }
    case types.LOGIN_ERROR:
      console.log('login error');
      return { ...state, authError: 'Login failed' }
    default: 
      return state;
  }
}

export default authReducer;
