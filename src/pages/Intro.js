import Login from '../components/Login';
import SignUp from '../components/SignUp';
import { Link } from 'react-router-dom';
const Intro = () => {
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
