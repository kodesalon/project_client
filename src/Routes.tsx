import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Main from './pages/Main';
import MyPage from './pages/MyPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Intro} />
        <Route path='/main' component={Main} />
        <Route path='/myPage' component={MyPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
