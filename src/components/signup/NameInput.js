import * as JOIN from 'util/constants';

const NameInput = ({ register, errors }) => {
  return (
    <>
      <label className='signup_input_wrapper'>
        이름
        <input
          className='signup_input'
          {...register('name', {
            required: true,
            pattern: {
              value: JOIN.NAME_HANGUL_REGEX,
              message: JOIN.NAME_GUIDE_ONLY_HANGUL,
            },

            minLength: {
              value: 2,
              message: JOIN.NAME_GUIDE_NAME_LENGTH,
            },
            maxLength: {
              value: 17,
              message: JOIN.NAME_GUIDE_NAME_LENGTH,
            },
          })}
        />
      </label>
      {errors.name && (
        <p className='input_constraints'>{errors.name.message}</p>
      )}
    </>
  );
};

export default NameInput;
