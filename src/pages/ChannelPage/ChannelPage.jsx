import React from 'react'
import './_ChannelPage.scss'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import Wrapper from './../../components/common/Wrapper/Wrapper.jsx'
import SubscribeBtn from './../../components/common/Buttons/SubscribeBtn.jsx'
import { getChannelPage } from '../../redux/actions/channelActions'
import Spinner from './../../components/common/Spinner/Spinner.jsx'

const ChannelPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { channel: { channel,error,loading } } = useSelector(state => state)
    
    React.useEffect(() => {
        dispatch(getChannelPage(id))
    },[dispatch,id])

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
                                <SubscribeBtn />
                            </div>
                        </div>

                        <ul className="channel-page__tab-list">
                            <li className="channel-page__tab-list__item">Главная</li>
                            <li className="channel-page__tab-list__item">Видео</li>
                            <li className="channel-page__tab-list__item">Плейлисты</li>
                        </ul>
                    </div>
                </div>

                <div className="channel-page__body">
                    <div className="channel-page__container">
                        dfg
                    </div>
                </div>
            </Wrapper>
    )
}

export default ChannelPage