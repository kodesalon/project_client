import { useForm } from 'react-hook-form';

import * as JOIN from 'util/constants';
import { useRef } from 'react';

const PasswordInput = ({ register, errors, watch }) => {
  const password = useRef({});
  password.current = watch('password', '');
  const passwordCheck = useRef({});
  passwordCheck.current = useRef('passwordCheck', '');
  return (
    <>
      <label className='signup_input_wrapper'>
        비밀번호
        <input
          type='text'
          className='signup_input'
          {...register('password', {
            required: true,
            pattern: {
              value: JOIN.PASSWORD_REGEX,
              message: JOIN.PWD_GUIDE_MORE_THAN_ONE_EACH_CHARACTER,
            },
            minLength: {
              value: 8,
              message: JOIN.PWD_GUIDE_LENGTH,
            },
            maxLength: {
              value: 16,
              message: JOIN.PWD_GUIDE_LENGTH,
            },
          })}
        />
      </label>
      {errors.password && (
        <div className='input_constraints'>{errors.password.message}</div>
      )}

      <label className='signup_input_wrapper'>
        비밀번호 확인
        <input
          name='passwordCheck'
          type='text'
          className='signup_input'
          {...register('passwordCheck', {
            validate: (value) =>
              value === password.current || JOIN.PWD_GUIDE_UNEQUAL_EACH_OTHER,
          })}
        />
      </label>
      {errors.passwordCheck && (
        <div className='input_constraints'>{errors.passwordCheck.message}</div>
      )}
    </>
  );
};

export default PasswordInput;
