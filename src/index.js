import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { Provider } from 'react-redux';
import './sass/main.scss';
import rootReducer from './modules';
import Routes from './Routes';

// const sagaMiddleware = createSagaMiddleware();
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(
//rootReducer
// composeEnhancers(applyMiddleware(sagaMiddleware))
//);
// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Routes />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
