import Header from '../components/Header';
import Nav from '../components/Nav';

const MyPage = () => {
  return (
    <div className='grid_container'>
      <Header headerType={'마이 페이지'} />
      <Nav />

      <div className='grid_empty'></div>
    </div>
  );
};

export default MyPage;
