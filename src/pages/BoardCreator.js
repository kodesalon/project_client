import Nav from '../components/Nav';
import Header from '../components/Header';

const BoardCreator = () => {
  return (
    <div className='grid_container'>
      <Header headerType={'작성하기'} />
      <Nav />
      <section className='creator_container'>
        <input className='creator_title' type='text' placeholder='제목' />
        <textarea
          className='creator_content'
          placeholder='내용을 입력해주세요'
        ></textarea>
        <button className='creator_btn'>작성</button>
      </section>
      <div className='grid_empty'></div>
    </div>
  );
};

export default BoardCreator;
