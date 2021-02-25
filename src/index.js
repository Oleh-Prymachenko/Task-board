import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "./app/counterContext";

import './i18n';
import './index.scss';
import App from './app/App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();