import React from 'react'
import { useParams } from 'react-router-dom'
import './_searchpage.scss'
import { GiSettingsKnobs } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import SubscribeBtn from '../../components/common/Buttons/SubscribeBtn'

const Searchpage = () => {
    const { query } = useParams()
    const [ showFilters,setShowFIlter ] = React.useState(false)

    const toggleFilters = () => {
        setShowFIlter(!showFilters)
    }

    return (
        <div className='searchpage'>

            <div className="searchpage__filters">

                <button className="searchpage__filterbtn" onClick={toggleFilters}>
                    <GiSettingsKnobs size={22}/>

                    Фильтры

                    <span className="searchpage__filterbtn--alt">Показать фильтры</span>
                </button>

                <div className={showFilters ? 'searchpage__filters__lists show' : 'searchpage__filters__lists'}>
                    <ul className="searchpage__filters__lists--list">
                        <span className="searchpage__filters__lists--type">По дате загрузки</span>

                        <div className="divider"></div>

                        <li className="searchpage__filters__lists--item active">
                            За последний час
                            <AiOutlineClose size={15}/>
                        </li>
                        <li className="searchpage__filters__lists--item">
                            Сегодня
                        </li>
                        <li className="searchpage__filters__lists--item">
                            За эту неделю
                        </li>
                        <li className="searchpage__filters__lists--item">
                            За этот месяц
                        </li>
                        <li className="searchpage__filters__lists--item">
                            За этот год
                        </li>
                    </ul>
                </div>
            </div>

            <div className="searchpage__results">
                <div className="searchpage__results__channels">
                    <ul className="searchpage__results__channels__list">
                        <li className="searchpage__results__channels__list__item">
                            <div className="searchpage__results__channels__list__item--image">
                                <img src="https://yt3.ggpht.com/ytc/AKedOLTlvHOBXyMMQ3krV-XNn_-yjD3v312CKvALsW8xdw=s176-c-k-c0x00ffffff-no-rj-mo" alt="channel-image" />
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
                            <div className="searchpage__results__videos__list__item--image">
                                <img src="https://media.istockphoto.com/photos/businessman-plan-business-growth-and-financial-increase-of-positive-picture-id1361507082?b=1&k=20&m=1361507082&s=170667a&w=0&h=s2reDA9gednXcuvBW4piXkWHz2_ScYB3uObZQsYfhqI=" alt="video-image" />
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