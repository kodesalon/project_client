import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from 'pages/Intro';
import Home from 'pages/Home';
import MyPage from 'pages/MyPage';
import SignUp from 'components/SignUp';
import UserInfoContextProvider from 'contexts/UserInfoContextProvider';
import BoardCreator from 'pages/BoardCreator';
import AuthRoute from 'components/AuthRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <UserInfoContextProvider>
            <Intro />
          </UserInfoContextProvider>
        </Route>
        {/* <AuthRoute exact path='/' component={Intro} /> */}
        <Route path='/home'>
          <UserInfoContextProvider>
            <Home />
          </UserInfoContextProvider>
        </Route>
        {/* <AuthRoute exact path='/home' component={Home} /> */}

        <Route path='/write' component={BoardCreator} />
        {/* <Route path='/mypage' component={MyPage} /> */}
        {/* <Route path='/signup' component={SignUp} /> */}

        <Route path='/mypage'>
          <UserInfoContextProvider>
            <MyPage />
          </UserInfoContextProvider>
        </Route>
        <Route path='/signup'>
          <UserInfoContextProvider>
            <SignUp />
          </UserInfoContextProvider>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
