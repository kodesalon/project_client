import Login from 'components/Login';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
const Intro = () => {
  const history = useHistory();
  useEffect(() => {
    const refreshToken = localStorage.getItem('rToken');
    if (refreshToken) {
      history.push('/home');
    }
  }, []);
  return (
    <>
      <section className='intro_img'></section>
      <section className='intro_content'>
        <Login />
        <span className='intro_signup'>
          회원이 아니신가요?{' '}
          <u className='intro_btn-signup'>
            <Link to='/signup'>지금 가입하세요!</Link>
          </u>
        </span>
      </section>
    </>
  );
};

export default Intro;
