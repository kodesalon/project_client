const ContentInput = ({ register, errors }) => {
  return (
    <textarea
      className='creator_content'
      placeholder='내용을 입력해주세요'
      {...register('content', {
        required: true,
      })}
    ></textarea>
  );
};

export default ContentInput;
