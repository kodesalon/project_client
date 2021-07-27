import { useContext, useEffect, useState } from 'react';

import * as memberAPI from 'apis/member';
import Modal from 'common/Modal';
import { UserInfoContext } from 'contexts/UserInfoContextProvider';
import { useHistory } from 'react-router-dom';
import * as MSG from 'util/constForResponse';
const Login = () => {
  const [alias, setAlias] = useState('');
  const [password, setPassword] = useState('');
  const [serverMessage, setServerMessage] = useState('');
  const { memberId, setMemberId } = useContext(UserInfoContext);
  const history = useHistory();

  const submitLogin = (e) => {
    e.preventDefault();
    memberAPI.postMemberLogin({ alias, password }).then((res) => {
      console.log(res);
      if (res.code) {
        console.log(res.code);
        setServerMessage(MSG[res.code]);
      } else {
        localStorage.setItem('aToken', res.accessToken);
        localStorage.setItem('rToken', res.refreshToken);
        localStorage.setItem('memberId', res.memberId);
        setMemberId(res.memberId);
        history.push('/home');
      }
    });
  };
  const handleOnClose = () => {
    setServerMessage('');
  };

  return (
    <form className='login_content' onSubmit={submitLogin}>
      <span className='login_title'>로 그 인</span>
      <input
        className='login_input'
        placeholder='아이디'
        name='alias'
        type='text'
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
        // changeInput={handleOnChange}
      />
      <input
        className='login_input'
        placeholder='비밀번호'
        name='pwd'
        type='text'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        // changeInput={handleOnChange}
      />
      <button className='login_btn-signin' type='submit'>
        LOGIN
      </button>
      {serverMessage && <Modal content={serverMessage} handleOnClose={handleOnClose} />}
    </form>
  );
};
export default Login;
