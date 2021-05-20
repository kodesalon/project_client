import '../styles/Login.scss';

const Login = () => {
  return (
    <div className='login_content'>
      <span className='login_title'>로 그 인</span>
      <input className='login_input' placeholder='아이디' type='text' />
      <input className='login_input' placeholder='비밀번호' type='password' />
      <button className='login_btn-signin'>LOGIN</button>
    </div>
  );
};
export default Login;
