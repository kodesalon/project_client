import BoardCreator from '../components/BoardCreator';
import Boards from '../components/Boards';

const Home = () => {
  return (
    <div className='grid_container'>
      <nav className='nav'>
        <ul className='nav_ul'>
          <li className='nav_li'>홈</li>
          <li className='nav_li'>내가 쓴 글</li>
          <li className='nav_li'>마이 페이지</li>
        </ul>
      </nav>
      <header className='header'>홈</header>
      <div className='home_board_creator'>
        <BoardCreator />
      </div>
      <div className='home_board_list'>
        <Boards />
      </div>
      <div className='grid_empty'></div>
    </div>
  );
};

export default Home;
