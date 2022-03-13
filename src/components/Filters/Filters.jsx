import React from 'react'
import './_Filters.scss'
import { GiSettingsKnobs } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

const Filters = () => {
    const [ showFilters,setShowFIlter ] = React.useState(false)
    const [ filters,setFilters ] = React.useState([
        {
            title: 'По дате загрузки',
            filters: [{by: 'За последний час',active: true},{by: 'Сегодня',active: false},{by: 'За эту неделю',active: false},{by: 'За этот месяц',active: false},{by: 'За этот год',active: false}]
        },
        {
            title: 'Тип',
            filters: [{by: 'Видео',active: false},{by: 'Каналы',active: false},{by: 'Плейлисты',active: false},{by: 'Фильмы',active: false}]
        },
        {
            title: 'Длительность',
            filters: [{by: 'Менее 4 минут',active: false},{by: 'От 4 до 20 минут',active: false},{by: 'Более 20 минут',active: false}]
        },
        {
            title: 'Упорядочить',
            filters: [{by: 'По релевантности',active: true},{by: 'По дате загрузки',active: false},{by: 'По числу просмотров',active: false},{by: 'По рейтингу',active: false}]
        }
        
    ])

    const toggleFilters = () => {
        setShowFIlter(!showFilters)
    }

  return (
        <div className="searchpage__filters">

            <button className="searchpage__filterbtn" onClick={toggleFilters}>
                <GiSettingsKnobs size={22}/>

                Фильтры

                <span className="searchpage__filterbtn--alt">Показать фильтры</span>
            </button>

            <div className={showFilters ? 'searchpage__filters__lists show' : 'searchpage__filters__lists'}>

                    {filters.map((filter,index) => {
                        return (
                            <ul className='searchpage__filters__lists--list' key={index}>
                                <span className="searchpage__filters__lists--type">{filter.title}</span>

                                <div className="divider"></div>

                                {filter.filters.map((item,index) => {
                                    return (
                                        <li className={item.active ? 'searchpage__filters__lists--item active' : 'searchpage__filters__lists--item'} key={index}>
                                            {item.by}
                                            {item.active && <AiOutlineClose size={15}/>}
                                        </li>
                                    )
                                })}
                            </ul>
                            
                        )
                    })}
            </div>
        </div>
  )
}

export default Filters