import React, { useEffect } from 'react';
import * as JOIN from 'util/constants';

const PhoneInput = ({ register, errors, setValue, watch }) => {
  const watchPhoneInput = watch('phone', false);

  useEffect(() => {
    if (watchPhoneInput.length === 10) {
      setValue(
        'phone',
        watchPhoneInput
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
      );
    }
    if (watchPhoneInput.length === 13) {
      setValue(
        'phone',
        watchPhoneInput
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      );
    }
    console.log(watchPhoneInput);
  }, [watchPhoneInput, setValue]);

  return (
    <>
      <label className='signup_input_wrapper'>
        휴대폰
        <input
          type='text'
          className='signup_input'
          {...register('phone', {
            required: false,
            pattern: {
              value: JOIN.PHONE_REGEX,
              message: JOIN.PHONE_GUIDE_ONLY_NUMBER,
            },
            minLength: {
              value: 8,
              message: JOIN.PHONE_GUIDE_LENGTH,
            },
            maxLength: {
              value: 13,
              message: JOIN.PHONE_GUIDE_LENGTH,
            },
          })}
        />
      </label>
      {errors.phone && (
        <p className='input_constraints'>{errors.phone.message}</p>
      )}
    </>
  );
};

export default PhoneInput;
