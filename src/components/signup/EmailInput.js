import * as JOIN from 'util/constants';

const EmailInput = ({ register, errors }) => {
  return (
    <>
      <label className='signup_input_wrapper'>
        이메일
        <input
          className='signup_input'
          {...register('email', {
            required: true,
            pattern: {
              value: JOIN.EMAIL_REGEX,
              message: JOIN.EMAIL_GUIDE_FORM,
            },
          })}
        />
      </label>
      {errors.email && (
        <p className='input_constraints'>{errors.email.message}</p>
      )}
    </>
  );
};

export default EmailInput;
