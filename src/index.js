import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import './index.css';
import App from './App';
import rootReducer from './store/reducers';
import think from './middleware/think';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(think));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
  
serviceWorker.unregister();
