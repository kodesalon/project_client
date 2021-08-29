import { NavLink, useHistory } from 'react-router-dom';

const Nav = () => {
  const history = useHistory();
  const requestLogout = () => {
    // localStorage.removeItem('aToken');
    // localStorage.removeItem('rToken');
    // localStorage.removeItem('memberId');
    localStorage.clear();
    history.push('/');
  };
  return (
    <nav className='nav'>
      <ul className='nav_ul'>
        <li className='nav_li'>
          <NavLink className='nav_link' to='/home'>
            홈
          </NavLink>
        </li>
        <li className='nav_li'>
          <NavLink className='nav_link' to='/write'>
            작성하기
          </NavLink>
        </li>
        <li className='nav_li'>
          <NavLink className='nav_link' to='/myPage'>
            마이페이지
          </NavLink>
        </li>
        <li className='nav_li'>
          <button onClick={requestLogout} className='temp_logout_btn'>
            로그아웃
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
