function createThinkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const think = createThinkMiddleware();
think.withExtraArgument = createThinkMiddleware;

export default think;
