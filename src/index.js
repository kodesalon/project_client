import React from 'react';
import ReactDOM from 'react-dom';

import 'sass/main.scss';

import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
