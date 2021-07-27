import Nav from 'components/Nav';
import Header from 'components/Header';
import BoardForm from 'components/board/BoardForm';

const BoardCreator = () => {
  return (
    <div className='grid_container'>
      <Header headerType={'작성하기'} />
      <Nav />
      <BoardForm />
      <div className='grid_empty'></div>
    </div>
  );
};

export default BoardCreator;
