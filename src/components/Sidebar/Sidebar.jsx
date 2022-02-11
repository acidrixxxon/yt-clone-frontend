import React from 'react';
import { MdHome,MdSubscriptions,MdLibraryBooks,MdHistory,MdThumbUp, MdExitToApp } from 'react-icons/md'
import { IoNavigateCircleOutline } from 'react-icons/io5'
import { BiTimeFive } from 'react-icons/bi'
import './_sidebar.scss'
import { Link, useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import { logout } from '../../redux/actions/userActions';

const Sidebar = ({ sidebar,handleToggleSidebar }) => {
  const dispatch = useDispatch()

  const location = useLocation()
  const { user } = useSelector(state => state)

  if (location.pathname.split('/')[1] === 'video') return <></>
  return <>
    <nav className={sidebar ? 'navbar open' : 'navbar'} onClick={() => handleToggleSidebar()}>
      <Link to="/" className="navbar__link">
        <li className='navbar__item active'>
          <MdHome 
            className='navbar__item-icon'
            size={23} />
              <span>Главная</span>
        </li>
      </Link>

      <Link to='/feed/navigation' className="navbar__link">
        <li className='navbar__item'>
            <IoNavigateCircleOutline
              className='navbar__item-icon'
              size={23} />
                <span>Навигатор</span>
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

      <hr />

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
              <span>История</span>
         </li>
      </Link>

      <Link to="/history" className="navbar__link">
        <li className='navbar__item'>
          <BiTimeFive
            className='navbar__item-icon'
            size={22} />
              <span>Смотреть позже</span>
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

      {user.user === null && (
        (<><hr />
          <p>Вы сможете ставить отметки "Нравится", писать комментарии и подписываться на каналы.
          <button>Войти</button>
        </p></>
        )
      )}

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
