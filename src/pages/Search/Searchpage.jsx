import React from 'react'
import './_searchpage.scss'
import Filters from '../../components/Filters/Filters'
import SubscribeBtn from './../../components/common/Buttons/SubscribeBtn'
import { MdPlaylistAdd } from 'react-icons/md'
import { BiTimeFive } from 'react-icons/bi'
import { AiFillFlag } from 'react-icons/ai'

const Searchpage = () => {
    const [ showSubmenu,setShowSubmenu ] = React.useState(false)

    const toggleSubmenu = () => {
        setShowSubmenu(!showSubmenu)
        console.log('hui')
    }
    return (
        <div className='searchpage'>
            <Filters />

            <div className="searchpage__results">
                <div className="searchpage__results__channels">
                    <ul className="searchpage__results__channels__list">
                        <li className="searchpage__results__channels__list__item">
                            <div className="searchpage__results__channels__list__item--image">
                                <img src="https://yt3.ggpht.com/ytc/AKedOLTlvHOBXyMMQ3krV-XNn_-yjD3v312CKvALsW8xdw=s176-c-k-c0x00ffffff-no-rj-mo" alt="channel" />
                            </div>

                            <div className="searchpage__results__channels__list__item__metadata">
                                <div className="searchpage__results__channels__list__item__metadata--channelname">
                                    MORGENSHTERN
                                </div>

                                <div className="searchpage__results__channels__list__item__metadata--stats">
                                    <span className="subs">
                                        11,6 млн подписчиков
                                    </span>
                                    <span className="dot">
                                        •
                                    </span>
                                    <span className="videos">
                                        123 видео
                                    </span>
                                </div>

                                <div className="searchpage__results__channels__list__item__metadata--desc">
                                    Самое популярное личико страны. Контакты: +79999833339 (Анна) Реклама/Концерты/Коммерция: ...
                                </div>
                            </div>

                            <SubscribeBtn />
                        </li>
                    </ul>
                </div>

                <div className="searchpage__results__videos">
                    <ul className="searchpage__results__videos__list">
                        <li className="searchpage__results__videos__list__item">
                            <div className="submenu">
                                <div className={showSubmenu ? 'submenu__dots active' : 'submenu__dots'} onClick={toggleSubmenu}>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>

                                <div className={showSubmenu ? 'submenu__list active' : 'submenu__list'}>
                                    <button className="submenu__list--btn">
                                        <MdPlaylistAdd size={20} />
                                        Добавить в плейлист
                                    </button>
                                    <button className="submenu__list--btn">
                                        <BiTimeFive size={20} />
                                        Cмотреть позже
                                    </button>
                                    <div className="divider"></div>
                                    <button className="submenu__list--btn">
                                        <AiFillFlag size={20} />
                                        Пожаловаться
                                    </button>
                                </div>
                            </div>
                            <div className="searchpage__results__videos__list__item--image">
                                <img src="https://media.istockphoto.com/photos/businessman-plan-business-growth-and-financial-increase-of-positive-picture-id1361507082?b=1&k=20&m=1361507082&s=170667a&w=0&h=s2reDA9gednXcuvBW4piXkWHz2_ScYB3uObZQsYfhqI=" alt="video" />
                            </div>

                            <div className="searchpage__results__videos__list__item__metadata">
                                <div className="searchpage__results__videos__list__item__metadata--title">
                                    MORGENSHTERN - ПОЧЕМУ? (Official Video, 2022)
                                </div>
                                
                                <div className="searchpage__results__videos__list__item__metadata--stats">
                                    <span className="views">
                                        13 млн просмотров
                                    </span>
                                    <span className="dot">
                                        •
                                    </span>
                                    <span className="date">
                                        1 месяц назад
                                    </span>
                                </div>

                                <div className="searchpage__results__videos__list__item__metadata--author">
                                    <img src="https://yt3.ggpht.com/ytc/AKedOLTlvHOBXyMMQ3krV-XNn_-yjD3v312CKvALsW8xdw=s68-c-k-c0x00ffffff-no-rj" alt="" />
                                    <span> MORGENSHTERN</span>
                                </div>

                                <div className="searchpage__results__videos__list__item__metadata--desc">
                                    НЕ МОРГЕНШТЕРН: https://t.me/nemorgenshtern КОНКУРС НА ЛЯМ РУБАСОВ ТАМ БЛИН!!!
                                </div>
                            </div>
                            
                        </li>
                    </ul>    
                </div>
            </div>
        </div>
  )
}

export default Searchpage