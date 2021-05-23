const MyPage = () => {
  return (
    <div className='grid_container'>
      <nav className='nav'>
        <ul className='nav_ul'>
          <li className='nav_li'>홈</li>
          <li className='nav_li'>내가 쓴 글</li>
          <li className='nav_li'>마이 페이지</li>
        </ul>
      </nav>
      <header className='header'>마이페이지</header>

      <div className='grid_empty'></div>
    </div>
  );
};

export default MyPage;
