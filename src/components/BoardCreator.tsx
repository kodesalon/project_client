const BoardCreator = () => {
  return (
    <>
      <section className='creator_container'>
        <input className='creator_title' type='text' placeholder='제목' />
        <textarea
          className='creator_content'
          placeholder='내용을 입력해주세요'
        ></textarea>
        <button className='creator_btn'>작성</button>
      </section>
    </>
  );
};

export default BoardCreator;
