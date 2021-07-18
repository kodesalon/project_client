import * as JOIN from 'util/constants';

const AliasInput = ({ register, errors }) => {
  return (
    <>
      <label className='signup_input_wrapper'>
        아이디
        <input
          className='signup_input'
          {...register('alias', {
            required: true,
            pattern: {
              value: JOIN.ALIAS_FIRST_CHARACTER_REGEX,
              message: JOIN.ALIAS_GUIDE_START_WITH_ENGLISH,
            },
            maxLength: {
              value: 15,
              message: JOIN.ALIAS_GUIDE_UNION_ENGLISH_AND_NUMBER,
            },
            minLength: {
              value: 4,
              message: JOIN.ALIAS_GUIDE_UNION_ENGLISH_AND_NUMBER,
            },
            validate: {
              hasNumber: (value) =>
                JOIN.ALIAS_ALLOWED_CHARACTER_TYPE_REGEX.test(value) ||
                JOIN.ALIAS_GUIDE_UNION_ENGLISH_AND_NUMBER,
            },
          })}
        />
      </label>
      {errors.alias && (
        <div className='input_constraints'>{errors.alias.message}</div>
      )}
    </>
  );
};

export default AliasInput;
