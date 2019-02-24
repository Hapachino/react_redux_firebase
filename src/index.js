import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import './index.css';
import App from './App';
import fb from './config/fb';
import rootReducer from './store/reducers';
import think from './middleware/think';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer,
  compose( 
    applyMiddleware(think.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fb),
    reduxFirestore(fb),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
  
serviceWorker.unregister();
