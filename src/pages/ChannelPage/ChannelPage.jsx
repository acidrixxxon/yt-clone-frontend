import React from 'react'
import './_ChannelPage.scss'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import Wrapper from './../../components/common/Wrapper/Wrapper.jsx'
import SubscribeBtn from './../../components/common/Buttons/SubscribeBtn.jsx'
import UnsubscribeBtn from './../../components/common/Buttons/UnsubscribeBtn.jsx'
import { getChannelPage, subscribeOnChannel, unsubscribeOnChannel } from '../../redux/actions/channelActions'
import Spinner from './../../components/common/Spinner/Spinner.jsx'
import ReactPlayer from 'react-player'
import moment from 'moment'
import { MdOutlineSort } from 'react-icons/md'
import VideoSmall from '../../components/VideoSmall/VideoSmall'

const ChannelPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [ activeTab,setActiveTab ] = React.useState('main')

    React.useEffect(() => {
        dispatch(getChannelPage(id))
    },[dispatch,id])

    const { channel: { channel,videos,error,loading,subloading } } = useSelector(state => state)
    const { user } = useSelector(state => state)
  

    if ( loading ) return <Spinner /> 

    return (
            <Wrapper id="channel-page">
                <div className="channel-page__bg">
                    <img src="https://images.pexels.com/photos/1509582/pexels-photo-1509582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="channel-page__bg--img" />
                </div>
                
                <div className="channel-page__header">
                    <div className="channel-page__container container">

                        <div className="channel-page__metadata">

                            <div className="channel-page__metadata__left">
                                <div className="channel-page__metadata__avatar">
                                    <img src={channel.avatar} alt="channel-avatar" className="channel-page__metadata__avatar--img" />
                                </div>
                                <h2 className="channel-page__metadata__username">
                                    {channel.name}
                                </h2>  
                            </div>

                            <div className="channel-page__metadata__right">
                                {user.user !== null && user.accessToken ? channel.subscribed 
                                    ? <UnsubscribeBtn loading={subloading} onClick={() => dispatch(unsubscribeOnChannel(id))}/> 
                                    : <SubscribeBtn loading={subloading} onClick={() => dispatch(subscribeOnChannel(id))}/> : ''
                                }
                            </div>
                        </div>

                        <ul className="channel-page__tab-list">
                            <li 
                                onClick={() => setActiveTab('main')}
                                className={activeTab === 'main' ? 'channel-page__tab-list__item active' : 'channel-page__tab-list__item'}>Главная</li>
                            <li 
                                onClick={() => setActiveTab('video')}
                                className={activeTab === 'video' ? 'channel-page__tab-list__item active' : 'channel-page__tab-list__item'}>Видео</li>

                            <li 
                                onClick={() => setActiveTab('playlist')}
                                className={activeTab === 'playlist' ? 'channel-page__tab-list__item active' : 'channel-page__tab-list__item'}>Плейлисты</li>
                        </ul>
                    </div>
                </div>

                <div className="channel-page__body">
                    <div className="channel-page__container container">
                        { activeTab === 'main' && (
                            <>
                                <div className="channel-page__preview">
                                    <ReactPlayer 
                                        url="https://youtu.be/UzD6wVgriAc"
                                        className="channel-page__preview--video"
                                        controls={true}
                                        
                                    />

                                    <div className="channel-page__video-data">
                                        <h5 className="channel-page__video-data--title">
                                            Part 3 - React JS beginner to advance
                                        </h5>

                                        <div className="channel-page__video-data__metadata">
                                            <span className="channel-page__video-data__metadata--views">
                                                1 114 просмотра
                                            </span>
                                            <span className="channel-page__video-data__metadata--divider">
                                                •
                                            </span>
                                            <span className="channel-page__video-data__metadata--time">
                                                3 недели назад
                                            </span>
                                        </div>

                                        <div className="channel-page__video-data__description">
                                            <p className="channel-page__video-data__description--para">
                                                How to build a App with React (props, state, effect, custom hooks...)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="channel-page__content">
                                    <h4 className="channel-page__content--title">
                                        Последние видео
                                    </h4>

                                    <ul className="channel-page__content__video-list">
                                        {videos.slice(0,5).map((video) => {
                                            return (
                                                <VideoSmall video={video} />
                                            )
                                        })}
                                    </ul>
                                </div>
                            </>
                        )}


                        { activeTab === 'video' && (
                            <div className="channel-page__videos">
                                <div className="channel-page__videos__headline">
                                    <h4 className="channel-page__video-list__top--title">Загрузки</h4>
                                    <button className='channel-page__video-list__top__sort--btn sort-btn'>
                                        <MdOutlineSort className='channel-page__video-list__top__sort--btnIcon'/> 
                                        Упорядочить
                                    </button>
                                </div>

                                <ul className="channel-page__videos-list">
                                    {videos.map((video) => {
                                        return (
                                            <VideoSmall video={video} />
                                        )
                                    })}
                                </ul>
                            </div>
                        )}


                        { activeTab === 'playlist' && (
                            <div className="channel-page__play-list">
                                playlists
                            </div>
                        )}
                    </div>
                </div>
            </Wrapper>
    )
}

export default ChannelPage