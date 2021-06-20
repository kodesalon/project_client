// import BoardCreator from '../components/BoardCreator';
import Boards from 'components/Boards';
import Nav from 'components/Nav';
import Header from 'components/Header';

const Home = () => {
  return (
    <div className='grid_container'>
      <Header headerType={'홈'} />
      <Nav />

      <div className='home_board_list'>
        <Boards />
      </div>
      <div className='grid_empty'></div>
    </div>
  );
};

export default Home;
