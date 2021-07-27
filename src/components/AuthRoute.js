import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { postNewToken } from 'apis/auth';
import Intro from 'pages/Intro';
import * as MSG from 'util/constForResponse';
import Modal from 'common/Modal';
import { useHistory } from 'react-router-dom';

import UserInfoContextProvider from 'contexts/UserInfoContextProvider';
import { useState } from 'react';

const AuthRoute = ({ component: Component, ...rest }) => {
  const [serverMessage, setServerMessage] = useState('');
  const history = useHistory();

  //1 .localStorage에 rToken이 있는지?
  // 있을 경우 해당 rToken으로 aToken 및 rToken 재발급

  // 없을 경우 걍 로그인 시키면 됨

  const isAuth = () => {
    const refreshToken = localStorage.getItem('rToken');

    if (refreshToken) {
      console.log(refreshToken);
      postNewToken({ refreshToken }).then((res) => {
        console.log(res);
        // if (res.code) {
        //   history.push('/');
        //   localStorage.clear();
        //   setServerMessage(MSG[res.code]);
        // }
        return true;
      });
    } else {
      return false;
    }
  };
  const handleOnClose = () => {
    setServerMessage('');
  };
  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          isAuth() ? (
            <UserInfoContextProvider>
              <Component {...props} />{' '}
            </UserInfoContextProvider>
          ) : (
            <Intro />
          )
        }
      />
      {serverMessage && <Modal content={serverMessage} handleOnClose={handleOnClose} />}
    </>
  );
};
export default AuthRoute;
