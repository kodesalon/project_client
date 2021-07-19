import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from 'pages/Intro';
import Home from 'pages/Home';
import MyPage from 'pages/MyPage';
import SignUp from 'components/SignUp';
import UserInfoContextProvider from 'contexts/UserInfoContextProvider';
import BoardCreator from 'pages/BoardCreator';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <UserInfoContextProvider>
            <Intro />
          </UserInfoContextProvider>
        </Route>
        <Route path='/home'>
          <UserInfoContextProvider>
            <Home />
          </UserInfoContextProvider>
        </Route>
        <Route path='/write' component={BoardCreator} />
        <Route path='/mypage' component={MyPage} />
        <Route path='/signup' component={SignUp} />

        {/* <Route path='/signup'>
          <SignUpContextProvider>
            <SignUp />
          </SignUpContextProvider>
        </Route> */}
      </Switch>
    </Router>
  );
};

export default Routes;
