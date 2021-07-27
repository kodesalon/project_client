import React, { useEffect, useState, useContext } from 'react';
import Header from 'components/Header';
import Nav from 'components/Nav';
import * as MemberAPI from 'apis/member';
import { UserInfoContext } from 'contexts/UserInfoContextProvider';

const MyPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [isSetPassword, setIsSetPassword] = useState(false);

  const handleOnClickPassword = (e) => {
    e.preventDefault();
    setIsSetPassword(!isSetPassword);
  };
  useEffect(() => {
    let memberId = localStorage.getItem('memberId');
    console.log(memberId);
    MemberAPI.getMemberSelect({ memberId }).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div className='grid_container'>
      <Header headerType={'마이 페이지'} />
      <Nav />
      <form>
        <label htmlFor='alias'>
          아이디
          <input id='alias' type='text' disabled value='ms129' />
        </label>
        <label htmlFor='name'>
          이름
          <input id='name' type='text' disabled value='양명선' />
        </label>
        <label htmlFor='email'>
          이메일
          <input id='email' type='text' disabled value='ms@gmail.com' />
        </label>
        <label htmlFor='phone'>
          휴대폰
          <input id='phone' type='text' disabled value='01020411209' />
        </label>
        <label htmlFor='password'>
          비밀번호
          <input id='password' type='password' disabled value='aaAA12!!' />
        </label>
        <button onClick={handleOnClickPassword}>비밀번호 변경</button>
        {isSetPassword ? (
          <div>
            {console.log(isSetPassword)}
            <label htmlFor='oldPassword'>
              현재 비밀번호
              <input
                id='oldPassword'
                type='password'
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </label>
            <label htmlFor='newPassword'>
              새 비밀번호
              <input
                id='newPassword'
                type='password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>
            <button onClick={handleOnClickPassword}>완료</button>
          </div>
        ) : null}
      </form>
      <div className='grid_empty'></div>
    </div>
  );
};

export default React.memo(MyPage);
