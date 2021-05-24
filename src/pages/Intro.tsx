import Login from '../components/Login';

const Intro = () => {
  return (
    <>
      <section className='intro_img'></section>
      <section className='intro_content'>
        <Login />
        <span className='intro_signup'>
          회원이 아니신가요?{' '}
          <u className='intro_btn-signup'>지금 가입하세요!</u>
        </span>
      </section>
    </>
  );
};

export default Intro;
