import { NavLink } from 'react-router-dom';

const Nav = () => {
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
      </ul>
    </nav>
  );
};

export default Nav;
