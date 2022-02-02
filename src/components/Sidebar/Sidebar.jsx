import React from 'react';
import { MdHome,MdSubscriptions,MdLibraryBooks,MdHistory,MdThumbUp, MdExitToApp } from 'react-icons/md'
import './_sidebar.scss'
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import { logout } from '../../redux/actions/userActions';

const Sidebar = ({ sidebar,handleToggleSidebar }) => {
  const dispatch = useDispatch()

  const { user } = useSelector(state => state)

  return <>
    <nav className={sidebar ? 'navbar open' : 'navbar'} onClick={() => handleToggleSidebar()}>
      <Link to="/" className="navbar__link">
        <li className='navbar__item'>
          <MdHome 
            className='navbar__item-icon'
            size={23} />
              <span>Главная</span>
        </li>
      </Link>

      <Link to='/feed/subscriptions' className="navbar__link">
        <li className='navbar__item'>
            <MdSubscriptions 
              className='navbar__item-icon'
              size={21} />
                <span>Подписки</span>
        </li>
      </Link>

      <Link to="/liked" className="navbar__link">
         <li className='navbar__item'>
            <MdThumbUp 
              className='navbar__item-icon'
              size={22} />
                <span>Любимое</span>
         </li>
      </Link>


      <Link to="/history" className="navbar__link">
        <li className='navbar__item'>
          <MdHistory 
            className='navbar__item-icon'
            size={22} />
              <span>История просмотров</span>
         </li>
      </Link>

      <Link to="/library" className="navbar__link">
        <li className='navbar__item'> 
          <MdLibraryBooks 
            className='navbar__item-icon'
            size={21} />
              <span>Библиотека</span>
         </li>
      </Link>


      {user.user &&(<>
      <hr />

      <Link onClick={() => dispatch(logout())} to="" className="navbar__link">
        <li className='navbar__item'> 
          <MdExitToApp 
            className='navbar__item-icon'
            size={21} />
              <span>Выйти</span>
         </li>
      </Link>

      <hr /></>)
      }
    </nav>
  </>;
};

export default Sidebar;
