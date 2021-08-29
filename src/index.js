import React from 'react';
import ReactDOM from 'react-dom';
import UserInfoContextProvider from 'contexts/UserInfoContextProvider';
import 'sass/main.scss';

import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <UserInfoContextProvider>
      <Routes />
    </UserInfoContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
