import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import SignUp from './components/SignUp';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Intro} />
        <Route path='/home' component={Home} />
        <Route path='/myPage' component={MyPage} />
        <Route path='/signUp' component={SignUp} />
      </Switch>
    </Router>
  );
};

export default Routes;
