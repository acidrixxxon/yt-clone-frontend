import React from 'react';
import './_mobileNav.scss'
import { MdHome,MdSubscriptions,MdHistory,MdThumbUp } from 'react-icons/md'

const MobileNav = () => {
  return (
    <div className='mobile-nav'>
        <ul className="mobile-nav__list">
            <li className="mobile-nav__list-item active">
                <MdHome  className="mobile-nav__list-item--icon"/>
                <span className="mobile-nav__list-item--title">Главная</span>
            </li>
            <li className="mobile-nav__list-item">
                <MdSubscriptions  className="mobile-nav__list-item--icon"/>
                <span className="mobile-nav__list-item--title">Подписки</span>
            </li>
            <li className="mobile-nav__list-item">
                <MdHistory className="mobile-nav__list-item--icon" />
                <span className="mobile-nav__list-item--title">История</span>
            </li>
            <li className="mobile-nav__list-item">
                <MdThumbUp className="mobile-nav__list-item--icon"/>
                <span className="mobile-nav__list-item--title">Библиотека</span>
            </li>
        </ul>
    </div>
  );
};

export default MobileNav;
