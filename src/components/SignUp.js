import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as memberAPI from 'apis/member';
import Modal from 'common/Modal';
import { useHistory } from 'react-router-dom';

import AliasInput from 'components/signup/AliasInput';
import PasswordInput from 'components/signup/PasswordInput';
import NameInput from 'components/signup//NameInput';
import EmailInput from 'components/signup/EmailInput';
import PhoneInput from 'components/signup/PhoneInput';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    criteriaMode: 'firstError',
  });
  const [serverMessage, setServerMessage] = useState('');
  const history = useHistory();

  const onValid = (data) => {
    let params = data;
    delete params.passwordCheck;
    console.log(params);

    memberAPI
      .postMemberSignUp(params)
      .then((res) => {
        console.log(res);
        if (res.message) {
          setServerMessage(res.message);
        }
      })
      .then(() => {
        memberAPI.postMemberLogin({ alias: params.alias, password: params.password }).then((res) => {
          console.log(res);
          if (res) {
            setServerMessage(res);
          }
          if (res === 'success') {
            history.push('/home');
          }
        });
      });
  };
  const handleOnClose = () => {
    setServerMessage('');
  };
  return (
    <section className='signup_container'>
      <form onSubmit={handleSubmit(onValid)} className='signup_content'>
        <div className='signup_title'>회 원 가 입</div>

        <AliasInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} watch={watch} />
        <NameInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <PhoneInput register={register} errors={errors} setValue={setValue} watch={watch} />

        <input type='submit' className='signup_btn-signup' value='회원 가입' />
      </form>
      {serverMessage && <Modal content={serverMessage} handleOnClose={handleOnClose} />}
    </section>
  );
};

export default React.memo(SignUp);
