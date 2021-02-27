import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './i18n';
import './index.scss';
import App from './app/App';
import {CounterProvider} from './app/counterContext'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <CounterProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </CounterProvider>,
  document.getElementById('root')
);

reportWebVitals();