import React, { useState, useEffect } from 'react';
import { changeSignUpInput } from '../modules/user';
import { PASSWORD_REGEX, EMAIL_REGEX, PHONE_REGEX } from '../util/constant';

const SignUp = () => {
  // 휴대폰 번호를 임의로 담아두는 건데 store에서 관리할 필요가 있을까?

  const [error, setError] = useState('');
  const [isColor, setIsColor] = useState({
    alias: true,
    pwd: true,
    pwdCheck: true,
    name: true,
    email: true,
    phone: true,
  });
  const [Validation, setValidation] = useState({
    alias: '아이디는 영문자로 시작하고 숫자가 포함되야 합니다.(4글자 ~ 15글자)',
    pwd: '소문자, 대문자, 특수문자 1개이상(8글자 ~ 16글자)',
    pwdCheck: '',
    name: '',
    email: '',
    phone: '',
  });

  const [signUpInput, setSignUpInput] = useState({
    alias: '',
    pwd: '',
    pwdCheck: '',
    name: '',
    email: '',
    phone: '',
  });
  useEffect(() => {
    if (signUpInput.phone.length === 10) {
      setSignUpInput((prev) => ({
        ...prev,
        phone: signUpInput.phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'),
      }));
    }
    if (signUpInput.phone.length === 13) {
      setSignUpInput((prev) => ({
        ...prev,
        phone: signUpInput.phone
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      }));

      //setInputValue(inputValue.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [signUpInput.phone]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setSignUpInput((prev) => ({ ...prev, [name]: value }));
    validateInput(name, value);
  };

  const validateInput = (key, value) => {
    console.log(signUpInput);

    if (key === 'alias') {
      if (!/^[a-zA-Z]/g.test(value)) {
        setValidation((prev) => ({
          ...prev,
          [key]: '영문으로 시작해야 합니다.',
        }));
        setIsColor({ [key]: true });
      } else if (!/^[a-zA-Z](?=.*\d)[a-zA-Z0-9]{3,14}$/g.test(value)) {
        setValidation((prev) => ({
          ...prev,
          [key]: '4 ~ 15자의 영문자와 숫자 조합이어야 합니다.',
        }));
        setIsColor({ [key]: true });
      } else {
        setValidation((prev) => ({
          ...prev,
          [key]: '멋진 아이디네요!',
        }));
        setIsColor({ [key]: false });
      }
      return;
    }

    if (key === 'pwd') {
      if (!PASSWORD_REGEX.test(value)) {
        console.log(value);
        // 특수문자 허용 범위 물어보기
        setValidation((prev) => ({
          ...prev,
          [key]:
            '영어 대문자, 소문자, 특수문자, 숫자가 1자 이상 있어야 합니다.',
        }));
        setIsColor((prev) => ({ ...prev, [key]: true }));
        return;
      } else {
        if (value.length < 8 || value.length > 16) {
          console.log(value.length);
          setValidation((prev) => ({
            ...prev,
            [key]: '8 ~ 16자이어야 합니다',
          }));
          setIsColor((prev) => ({ ...prev, [key]: true }));
        } else {
          setValidation((prev) => ({
            ...prev,
            [key]: '☺︎',
          }));
          setIsColor((prev) => ({ ...prev, [key]: false }));
        }
        if (signUpInput.pwdCheck !== value) {
          setValidation((prev) => ({
            ...prev,
            pwdCheck: '비밀번호가 일치하지 않습니다.',
          }));
          setIsColor((prev) => ({ ...prev, pwdCheck: true }));
        } else {
          setValidation((prev) => ({
            ...prev,
            pwdCheck: '☺︎',
          }));
          setIsColor((prev) => ({ ...prev, pwdCheck: false }));
        }
        return;
      }
    }

    if (key === 'pwdCheck') {
      console.log(value);
      console.log(signUpInput);
      if (value !== signUpInput.pwd) {
        setValidation((prev) => ({
          ...prev,
          [key]: '비밀번호가 일치하지 않습니다.',
        }));
        setIsColor((prev) => ({ ...prev, [key]: true }));
      } else {
        setValidation((prev) => ({
          ...prev,
          [key]: '☺︎',
        }));
        setIsColor((prev) => ({ ...prev, [key]: false }));
      }
      return;
    }

    if (key === 'name') {
      if (/\s/g.test(value)) {
        setValidation((prev) => ({
          ...prev,
          [key]: '공백을 제거해야 합니다.',
        }));
        setIsColor((prev) => ({ ...prev, [key]: true }));
        return;
      }
      if (value.length < 2 || value.length > 18) {
        setValidation((prev) => ({
          ...prev,
          [key]: '이름은 2 ~ 18자 사이어야 합니다.',
        }));
        setIsColor((prev) => ({ ...prev, [key]: true }));
      } else {
        setValidation((prev) => ({
          ...prev,
          [key]: '☺︎',
        }));
        setIsColor((prev) => ({ ...prev, [key]: false }));
      }
      return;
    }
    if (key === 'email') {
      if (!EMAIL_REGEX.test(value)) {
        setValidation((prev) => ({
          ...prev,
          [key]: '이메일 형식이 맞지 않습니다.',
        }));
        setIsColor((prev) => ({ ...prev, [key]: true }));
      } else {
        setValidation((prev) => ({
          ...prev,
          [key]: '☺︎',
        }));
        setIsColor((prev) => ({ ...prev, [key]: false }));
      }
      return;
    }

    if ((key = 'phone')) {
      if (!PHONE_REGEX.test(value)) {
        setValidation((prev) => ({
          ...prev,
          [key]: '숫자만 입력이 가능합니다.',
        }));
        setIsColor((prev) => ({ ...prev, [key]: true }));
      } else if (value.length > 11) {
        setValidation((prev) => ({
          ...prev,
          [key]: '☺︎',
        }));
        setIsColor((prev) => ({ ...prev, [key]: false }));
      } else {
        setValidation((prev) => ({
          ...prev,
          [key]: '',
        }));
      }
      return;
    }
  };

  const onSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <section className='signup_container'>
      {/* <div className='signup_content'> */}
      <form onSubmit={onSignUp} className='signup_content'>
        <div className='signup_title'>회 원 가 입</div>
        <input
          className='signup_input'
          placeholder='아이디'
          type='text'
          value={signUpInput.alias}
          name='alias'
          onChange={(e) => handleOnChange(e, 'alias')}
        />
        <div className={'input_constraints' + (isColor.alias ? ' color' : '')}>
          {Validation.alias}
        </div>
        <input
          className='signup_input'
          placeholder='비밀번호'
          type='text'
          value={signUpInput.pwd}
          name='pwd'
          onChange={handleOnChange}
        />
        <div className={'input_constraints' + (isColor.pwd ? ' color' : '')}>
          {Validation.pwd}
        </div>

        <input
          className='signup_input'
          placeholder='비밀번호 확인'
          type='text'
          value={signUpInput.pwdCheck}
          name='pwdCheck'
          onChange={handleOnChange}
        />
        <div
          className={'input_constraints' + (isColor.pwdCheck ? ' color' : '')}
        >
          {Validation.pwdCheck}
        </div>

        <input
          className='signup_input'
          placeholder='이름'
          type='text'
          value={signUpInput.name}
          name='name'
          onChange={handleOnChange}
        />
        <div className={'input_constraints' + (isColor.name ? ' color' : '')}>
          {Validation.name}
        </div>

        <input
          className='signup_input'
          placeholder='이메일'
          type='email'
          value={signUpInput.email}
          name='email'
          onChange={handleOnChange}
        />
        <div className={'input_constraints' + (isColor.email ? ' color' : '')}>
          {Validation.email}
        </div>

        <input
          className='signup_input'
          placeholder='휴대폰'
          type='text'
          value={signUpInput.phone}
          name='phone'
          onChange={handleOnChange}
        />
        <div className={'input_constraints' + (isColor.phone ? ' color' : '')}>
          {Validation.phone}
        </div>

        <input className='signup_btn-signup' type='submit' value='가 입' />
      </form>
      {/* </div> */}
    </section>
  );
};
export default SignUp;
