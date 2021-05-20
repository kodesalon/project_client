import '../styles/SignUp.scss';

const SignUp = () => {
  return (
    <section className='signup_container'>
      <div className='signup_content'>
        <div className='signup_title'>회 원 가 입</div>
        <input className='signup_input' placeholder='아이디' type='text' />
        <span> 아이디는 8글자 이상이어야 합니다.</span>
        <input
          className='signup_input'
          placeholder='비밀번호'
          type='password'
        />
        <span> 비밀번호는 8글자 이상이어야 합니다.</span>

        <input
          className='signup_input'
          placeholder='비밀번호 확인'
          type='password'
        />
        <span> 비밀번호가 일치하지 않습니다.</span>

        <input className='signup_input' placeholder='이름' type='text' />
        <span> 이름은 8글자 이상이어야 합니다.</span>

        <input className='signup_input' placeholder='이메일' type='email' />
        <span>이메일이 형식에 맞아야 합니다</span>

        <div className='signup_phoneNum'>
          <input
            className='signup_input_phoneNum'
            placeholder='휴대폰'
            type='number'
          />
          -
          <input className='signup_input_phoneNum' type='number' /> -
          <input className='signup_input_phoneNum' type='number' />
        </div>
        <button className='signup_btn-signup'>가 입</button>
      </div>
    </section>
  );
};
export default SignUp;
