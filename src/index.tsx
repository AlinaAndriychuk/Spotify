import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import {TopBar} from './app/top-bar/top-bar-view/top-bar-view';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TopBar/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
