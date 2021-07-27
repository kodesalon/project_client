const TitleInput = ({ register, errors }) => {
  return (
    <input
      className='creator_title'
      type='text'
      placeholder='제목'
      {...register('title', {
        required: true,
      })}
    />
  );
};

export default TitleInput;
