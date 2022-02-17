import React from 'react';
import { MdHome,MdSubscriptions,MdLibraryBooks,MdHistory,MdThumbUp, MdExitToApp } from 'react-icons/md'
import { IoNavigateCircleOutline } from 'react-icons/io5'
import { AiOutlineArrowDown,AiOutlineVideoCamera } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'
import './_sidebar.scss'
import { Link, useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import { logout } from '../../redux/actions/userActions';
import SignInBtn from '../common/SignInBtn';
import useAuth from '../../hooks/useAuth'

const Sidebar = ({ sidebar,handleToggleSidebar }) => {
  const dispatch = useDispatch()
  const location = useLocation()

  const { user } = useSelector( state => state)

  // React.useEffect(() => {
  //   window.addEventListener('scroll', isSticky)
  // },[])

  // const isSticky = () => {
  //   console.log(window.scrollY)
  //   const offset = window.scrollY

  //   offset >= 60 ? document.querySelector('.navbar').classList.add('is-sticky') : document.querySelector('.navbar').classList.remove('is-sticky')
  // }

  return <>
    <nav className={sidebar ? 'navbar open' : 'navbar'}>
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

      <hr />

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
         <hr />
          <h3 className="user-subs">Подписки</h3>
          <ul className="user-subs__list">
            <Link to={`/channel/sdfgfdgdf`}>
              <li className="user-subs__item">
                <img src="https://yt3.ggpht.com/ytc/AKedOLQI0IbaSygZpZr9TX4zVwdqmx5AmdE2QgxbPTJqgQ=s88-c-k-c0x00ffffff-no-rj" alt="avatar" className="user-subs__item--avatar" />
                <span className="user-subs__item--name">Above & Beyond</span>
              </li>
            </Link>
            <Link to={`/channel/sdfgfdgdf`}>
              <li className="user-subs__item">
                <img src="https://yt3.ggpht.com/ytc/AKedOLSQnPeUQ9rFmkq9oOvnO--vHir9MuJ1SBWWJFx-=s88-c-k-c0x00ffffff-no-rj" alt="avatar" className="user-subs__item--avatar" />
                <span className="user-subs__item--name">Backbench Coder</span>
              </li>
            </Link>
            <Link to={`/channel/sdfgfdgdf`}>
              <li className="user-subs__item">
                <img src="https://yt3.ggpht.com/ytc/AKedOLQ0-u4B6eyGXt4B0RaApsjGjrdckx2uEtOEYyt5nQ=s88-c-k-c0x00ffffff-no-rj" alt="avatar" className="user-subs__item--avatar" />
                <span className="user-subs__item--name">Lena Kuka crew</span>
              </li>
            </Link>
            <Link to={`/channel/sdfgfdgdf`}>
              <li className="user-subs__item">
                <img src="https://yt3.ggpht.com/ytc/AKedOLQlCDlun57Qr6u6DY-yGM3H7vfXsAo6jgXC7Hvt=s88-c-k-c0x00ffffff-no-rj" alt="avatar" className="user-subs__item--avatar" />
                <span className="user-subs__item--name">Ulbi TV</span>
              </li>
            </Link>
            <Link to={`/channel/sdfgfdgdf`}>
              <li className="user-subs__item">
                <img src="https://yt3.ggpht.com/ytc/AKedOLTP7veiWCs8VWF8uxh1wiMwGCGnSGInjQlicctG=s88-c-k-c0x00ffffff-no-rj" alt="avatar" className="user-subs__item--avatar" />
                <span className="user-subs__item--name">Cercle</span>
              </li>
            </Link>
            <button className="user-subs__showMore">
              <AiOutlineArrowDown />
              <span>Показать еще</span>
            </button>
          </ul>
        </>
      )}

      {user.user === null && (
        (<><hr />
          <p>Вы сможете ставить отметки "Нравится", писать комментарии и подписываться на каналы.
          <SignInBtn />
        </p></>
        )
      )}

      {user.user &&(<>
        <hr style={{marginBottom: '0px',marginTop: '10px'}}/>

        <Link onClick={() => dispatch(logout())} to="" className="navbar__link">
          <li className='navbar__item'> 
            <MdExitToApp 
              className='navbar__item-icon'
              size={21} />
                <span>Выйти</span>
          </li>
        </Link>

        <hr style={{marginTop: '0px'}}/>
      </>)
      }
    </nav>
  </>;
};

export default Sidebar;
