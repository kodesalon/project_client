import React, { useState, useEffect } from 'react';
import * as JOIN from 'util/constants';
import InputBox from 'util/InputBox';

const SignUp = () => {
  const [error, setError] = useState('');
  const [isColor, setIsColor] = useState({
    alias: true,
    pwd: true,
    pwdCheck: true,
    name: true,
    email: true,
    phone: true,
  });
  const [validation, setValidation] = useState({
    alias: JOIN.ALIAS_GUIDE,
    pwd: JOIN.PWD_GUIDE,
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
    }
  }, [signUpInput.phone]);

  const handleOnChange = (name, value) => {
    const signUpItems = ['alias', 'pwd', 'pwdCheck', 'name', 'email', 'phone'];
    const validationFunctions = {
      alias: validateAlias,
      pwd: validatePwd,
      pwdCheck: validatePwdCheck,
      name: validateName,
      email: validateEmail,
      phone: validatePhone,
    };

    signUpItems
      .filter((elem) => elem === name)
      .forEach((key) => validationFunctions[key](key, value));
  };

  const setIncorrectResult = (key, guide) => {
    setValidation((prev) => ({
      ...prev,
      [key]: guide,
    }));
    setIsColor((prev) => ({ ...prev, [key]: true }));
  };

  const setCorrectResult = (key) => {
    setValidation((prev) => ({
      ...prev,
      [key]: JOIN.CORRECT_SIGNUP_INPUT,
    }));
    setIsColor((prev) => ({ ...prev, [key]: false }));
  };

  const aliasTest = {
    checkFirstCharacter: (value) =>
      JOIN.ALIAS_FIRST_CHARACTER_REGEX.test(value),

    checkAllowedCharacter: (value) =>
      JOIN.ALIAS_ALLOWED_CHARACTER_TYPE_REGEX.test(value),
  };
  const passwordTest = {
    checkAllowedCharacter: (value) =>
      new RegExp(JOIN.PASSWORD_REGEX).test(value),
  };
  const nameTest = {
    checkSpace: (value) => new RegExp(JOIN.NAME_SPACE_REGEX).test(value),
    checkCharacter: (value) => new RegExp(JOIN.NAME_HANGUL_REGEX).test(value),
  };
  const emailTest = {
    checkForm: (value) => JOIN.EMAIL_REGEX.test(value),
  };
  const phoneTest = {
    checkNumber: (value) => JOIN.PHONE_REGEX.test(value),
  };

  const validateAlias = (key, value) => {
    if (!aliasTest.checkFirstCharacter(value)) {
      setIncorrectResult(key, JOIN.ALIAS_GUIDE_START_WITH_ENGLISH);
      return;
    }
    if (!aliasTest.checkAllowedCharacter(value)) {
      setIncorrectResult(key, JOIN.ALIAS_GUIDE_UNION_ENGLISH_AND_NUMBER);
      return;
    } else {
      setCorrectResult(key);
    }
  };

  const validatePwd = (key, value) => {
    if (!passwordTest.checkAllowedCharacter(value)) {
      // 특수문자 허용 범위 물어보기
      setIncorrectResult(key, JOIN.PWD_GUIDE_MORE_THAN_ONE_EACH_CHARACTER);
      return;
    }
    if (
      value.length < JOIN.PWD_MINIMUM_LENGTH ||
      value.length > JOIN.PWD_MAXIMUM_LENGTH
    ) {
      console.log(value.length);
      setIncorrectResult(key, JOIN.PWD_GUIDE_LENGTH);
      return;
    } else {
      setCorrectResult(key);
    }

    if (value !== signUpInput.pwdCheck) {
      setIncorrectResult('pwdCheck', JOIN.PWD_GUIDE_UNEQUAL_EACH_OTHER);
      return;
    } else {
      setCorrectResult('pwdCheck');
    }
  };

  const validatePwdCheck = (key, value) => {
    console.log(value);
    console.log(signUpInput);
    if (value !== signUpInput.pwd) {
      setIncorrectResult(key, JOIN.PWD_GUIDE_UNEQUAL_EACH_OTHER);
      return;
    } else {
      setCorrectResult(key);
    }
  };

  const validateName = (key, value) => {
    if (!nameTest.checkCharacter(value)) {
      console.log(value);
      console.log(nameTest.checkCharacter(value));
      setIncorrectResult(key, JOIN.NAME_GUIDE_ONLY_HANGUL);
      return;
    }
    if (nameTest.checkSpace(value)) {
      setIncorrectResult(key, JOIN.NAME_GUIDE_REMOVE_SPACE);
      return;
    }
    if (
      value.length < JOIN.NAME_MINIMUM_LENGTH ||
      value.length > JOIN.NAME_MAXIMUM_LENGTH
    ) {
      setIncorrectResult(key, JOIN.NAME_GUIDE_NAME_LENGTH);
      return;
    } else {
      setCorrectResult(key);
    }
  };

  const validateEmail = (key, value) => {
    if (!emailTest.checkForm(value)) {
      setIncorrectResult(key, JOIN.EMAIL_GUIDE_FORM);
      return;
    } else {
      setCorrectResult(key);
    }
  };

  const validatePhone = (key, value) => {
    if (value.length > JOIN.PHONE_MAXIMUM_LENGTH) {
      setIncorrectResult(key, JOIN.PHONE_GUIDE_LENGTH);
      return;
    }
    if (!phoneTest.checkNumber(value)) {
      setIncorrectResult(key, JOIN.PHONE_GUIDE_ONLY_NUMBER);
      return;
    } else {
      setCorrectResult(key);
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

        <InputBox
          className='signup_input'
          placeholder='아이디'
          value={signUpInput.alias}
          name='alias'
          setInput={setSignUpInput}
          changeInput={handleOnChange}
        />
        <div className={'input_constraints' + (isColor.alias ? ' color' : '')}>
          {validation.alias}
        </div>
        <InputBox
          className='signup_input'
          placeholder='비밀번호'
          type='text'
          value={signUpInput.pwd}
          name='pwd'
          setInput={setSignUpInput}
          changeInput={handleOnChange}
        />

        <div className={'input_constraints' + (isColor.pwd ? ' color' : '')}>
          {validation.pwd}
        </div>
        <InputBox
          className='signup_input'
          placeholder='비밀번호 확인'
          type='text'
          value={signUpInput.pwdCheck}
          name='pwdCheck'
          setInput={setSignUpInput}
          changeInput={handleOnChange}
        />
        <div
          className={'input_constraints' + (isColor.pwdCheck ? ' color' : '')}
        >
          {validation.pwdCheck}
        </div>

        <InputBox
          className='signup_input'
          placeholder='이름'
          type='text'
          value={signUpInput.name}
          name='name'
          setInput={setSignUpInput}
          changeInput={handleOnChange}
        />
        <div className={'input_constraints' + (isColor.name ? ' color' : '')}>
          {validation.name}
        </div>

        <InputBox
          className='signup_input'
          placeholder='이메일'
          type='email'
          value={signUpInput.email}
          name='email'
          setInput={setSignUpInput}
          changeInput={handleOnChange}
        />
        <div className={'input_constraints' + (isColor.email ? ' color' : '')}>
          {validation.email}
        </div>
        <div className='signup_phone_container'>
          <label className='signup_phone_label'>
            <input type='checkbox' name='color' value='blue' />
            선택
          </label>
          <InputBox
            className='signup_input signup_phone'
            placeholder='휴대폰'
            type='text'
            value={signUpInput.phone}
            name='phone'
            setInput={setSignUpInput}
            changeInput={handleOnChange}
          />
        </div>
        <div className={'input_constraints' + (isColor.phone ? ' color' : '')}>
          {validation.phone}
        </div>
        <input className='signup_btn-signup' type='submit' value='가 입' />
      </form>
      {/* </div> */}
    </section>
  );
};
export default React.memo(SignUp);
