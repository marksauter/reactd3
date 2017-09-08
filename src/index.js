import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from 'services/registerServiceWorker';
import { Provider } from 'react-redux';

import store from 'state/store';

import App from './App';

import './styles.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();

