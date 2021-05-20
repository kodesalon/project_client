import '../styles/BoardCreate.scss';

const BoardCreate = () => {
  return (
    <>
      <section className='create_container'>
        <input type='text' placeholder='제목' />
        <textarea placeholder='내용을 입력해주세요'></textarea>
        <button>작성</button>
      </section>
    </>
  );
};

export default BoardCreate;
