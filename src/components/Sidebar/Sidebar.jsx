import React from 'react';
import { MdHome,MdSubscriptions,MdLibraryBooks,MdHistory,MdThumbUp } from 'react-icons/md'
import { IoNavigateCircleOutline } from 'react-icons/io5'
import { AiOutlineArrowDown,AiOutlineVideoCamera } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
import './_sidebar.scss'
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Auth from '../Auth/Auth';

const Sidebar = ({ sidebar,handleToggleSidebar }) => {
  const location = useLocation()

  const { user } = useSelector( state => state)

  return <>
    <nav className="sidebar">
      <Link to="/" className="navbar__link">
        <li className={location.pathname === '/' ? 'navbar__item active' : 'navbar__item'} >
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

        <Link to='/subscriptions' className="navbar__link">
          <li className='navbar__item'>
              <MdSubscriptions 
                className='navbar__item-icon'
                size={21} />
                  <span>Подписки</span>
          </li>
        </Link>

      <div className="divider"></div>

      {user.user && (
        <Link to="/liked" className="navbar__link">
          <li className='navbar__item'>
              <MdThumbUp 
                className='navbar__item-icon'
                size={22} />
                  <span>Любимое</span>
          </li>
        </Link>
      )}


      <Link to="/history" className="navbar__link">
        <li className={location.pathname === '/history' ? 'navbar__item active' : 'navbar__item'}>
          <MdHistory 
            className='navbar__item-icon'
            size={22} />
              <span>История</span>
         </li>
      </Link>

      {user.user && (
        <Link to="/history" className="navbar__link">
          <li className={location.pathname === '/my__channel' ? 'navbar__item active' : 'navbar__item'}>
            <AiOutlineVideoCamera
              className='navbar__item-icon'
              size={22} />
                <span>Ваши видео</span>
          </li>
        </Link>
      )}

      {user.user && (
        <Link to="/watchlater" className="navbar__link">
          <li className='navbar__item'>
            <BiTimeFive
              className='navbar__item-icon'
              size={22} />
                <span>Смотреть позже</span>
          </li>
        </Link>
      )}


      <Link to="/library" className="navbar__link">
        <li className='navbar__item'> 
          <MdLibraryBooks 
            className='navbar__item-icon'
            size={21} />
              <span>Библиотека</span>
         </li>
      </Link> 


      {user.user && (
        <>
         <div className="divider"></div>

         {user.user.subscriptions.length > 0 ? (
         <>
         <h3 className="user-subs">Подписки</h3>
          <ul className="user-subs__list">
            {user.user.subscriptions.map((item) => {
              return (
                <Link to={`/channel/${item._id}`} key={item._id}>
                  <li className="user-subs__item">
                    <img src={item.avatar} alt="avatar" className="user-subs__item--avatar" />
                    <span className="user-subs__item--name">{item.name}</span>
                  </li>
                </Link>
              )
            })}
        
            {user.user.subscriptions > 5 && (<button className="user-subs__showMore">
              <AiOutlineArrowDown />
              <span>Показать еще</span>
            </button>)}
          </ul>
          </>) : <h3 className='user-subs'>Нет подписок</h3>}
        </>
      )}
      
      <Auth />
    </nav>
  </>;
};

export default Sidebar;
