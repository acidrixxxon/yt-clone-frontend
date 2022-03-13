import React from 'react'
import './_searchpage.scss'
import Filters from '../../components/Filters/Filters'
import SubscribeBtn from './../../components/common/Buttons/SubscribeBtn'
import { MdPlaylistAdd } from 'react-icons/md'
import { BiTimeFive } from 'react-icons/bi'
import { AiFillFlag } from 'react-icons/ai'
import Wrapper from '../../components/common/Wrapper/Wrapper'
import { useParams,Link  } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { searchQuery } from '../../redux/actions/searchActions'
import moment from 'moment'

const Searchpage = () => {
    const [ showSubmenu,setShowSubmenu ] = React.useState(false)

    const { query } = useParams()
    const dispatch = useDispatch()
    const { search: { result: { channels,videos },error,loading} } = useSelector(state => state)

    const toggleSubmenu = () => {
        setShowSubmenu(!showSubmenu)
    }

    React.useEffect(() => {
        dispatch(searchQuery(query))
    },[dispatch,query])

    return (
        <Wrapper>
             <div className='searchpage'>
                <Filters />

                <div className="searchpage__results">
                    <div className="searchpage__results__channels">
                        <ul className="searchpage__results__channels__list">
                            {channels?.map(channel => {
                                return (
                                    <li className="searchpage__results__channels__list__item" key={channel._id}>
                                        <div className="searchpage__results__channels__list__item--image">
                                            <Link to={`/channel/${channel._id}`}>
                                            <img src={channel.avatar} alt="channelAvatar" />
                                            </Link>
                                        </div>
        
                                        <div className="searchpage__results__channels__list__item__metadata">
                                            <div className="searchpage__results__channels__list__item__metadata--channelname">
                                                <Link to={`/channels/${channel._id}`}>
                                                    {channel.name}
                                                </Link>
                                            </div>
        
                                            <div className="searchpage__results__channels__list__item__metadata--stats">
                                                <span className="subs">
                                                    {channel.subscribers.length} подписчик
                                                </span>
                                                <span className="dot">
                                                    •
                                                </span>
                                                <span className="videos">
                                                    123 видео
                                                </span>
                                            </div>
        
                                            <div className="searchpage__results__channels__list__item__metadata--desc">
                                                Описание отсутствует
                                            </div>
                                        </div>
        
                                        <SubscribeBtn />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="searchpage__results__videos">
                        <ul className="searchpage__results__videos__list">
                            {videos?.map(video => {
                                return (
                                    <li className="searchpage__results__videos__list__item" key={video._id}>
                                        <div id="submenu-searchpage">
                                            <div className='submenu__dots' onClick={toggleSubmenu}>
                                                <span className="dot"></span>
                                                <span className="dot"></span>
                                                <span className="dot"></span>
                                            </div>
        
                                            {showSubmenu && (
                                            <div className='submenu__list'>
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
                                            </div>)}
                                        </div>
        
                                        <div className="searchpage__results__videos__list__item--image">
                                            <Link to={`/video/${video._id}`}>
                                                <img src={video.thumbnail} alt="video" />
                                            </Link>
                                        </div>
        
                                        <div className="searchpage__results__videos__list__item__metadata">
                                            <div className="searchpage__results__videos__list__item__metadata--title">
                                                <Link to={`/video/${video._id}`}>
                                                    {video.title}
                                                </Link>
                                            </div>
                                            
                                            <div className="searchpage__results__videos__list__item__metadata--stats">
                                                <span className="views">
                                                    {video.views} просмотров
                                                </span>
                                                <span className="dot">
                                                    •
                                                </span>
                                                <span className="date">
                                                    {moment(video.createdAt).fromNow()}
                                                </span>
                                            </div>
        
                                            <div className="searchpage__results__videos__list__item__metadata--author">
                                                <Link to={`/channel/${video.channel.id}`}>
                                                    <img src={video.channel.avatar} alt="channelAvatar" />
                                                    <span>{video.channel.name}</span>
                                                </Link>
                                            </div>
        
                                            <div className="searchpage__results__videos__list__item__metadata--desc">
                                                {video.description}
                                            </div>
                                        </div>
                                        
                                    </li>
                                )
                            })}
                        </ul>    
                    </div>
                </div>
            </div>
        </Wrapper>
  )
}

export default Searchpage