import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from 'services/registerServiceWorker';
import { Provider } from 'react-redux';

import store from 'state/store';

import 'semantic-ui-css/semantic.min.css';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
