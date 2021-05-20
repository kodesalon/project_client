import BoardCreate from '../components/BoardCreate';
import BoardList from '../components/BoardList';
import '../styles/Main.scss';
const Main = () => {
  return (
    <div className='main_container'>
      <nav className='main_nav'>
        <ul>
          <li>홈</li>
          <li>내가 쓴 글</li>
          <li>마이 페이지</li>
        </ul>
      </nav>
      <header>홈</header>
      <div className='main_board_create'>
        <BoardCreate />
      </div>
      <div className='main_board_list'>
        <BoardList />
      </div>
      <div className='empty'></div>
    </div>
  );
};

export default Main;
