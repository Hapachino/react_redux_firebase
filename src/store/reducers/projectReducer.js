const DEFAULT_STATE = {
  projects: [
    { id: 1, title: 'This is a test title', content: 'some random text' },
    { id: 2, title: 'This is another test title', content: 'some random text' },
    { id: 3, title: 'Have I mentioned this is a test', content: 'some random text' },
  ],
};

const projectReducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
  }

  return state;
}

export default projectReducer;
