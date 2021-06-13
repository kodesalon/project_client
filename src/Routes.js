import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import SignUp from './components/SignUp';
import Test from './components/Test';
import BoardCreator from './pages/BoardCreator';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Intro} />
        <Route path='/home' component={Home} />
        <Route path='/write' component={BoardCreator} />
        <Route path='/mypage' component={MyPage} />
        <Route path='/signup' component={SignUp} />
        <Route path='/test' component={Test} />
      </Switch>
    </Router>
  );
};

export default Routes;
