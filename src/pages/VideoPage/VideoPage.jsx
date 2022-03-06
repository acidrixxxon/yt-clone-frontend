import React from 'react';
import { useParams } from 'react-router-dom';
import './_videoPage.scss'
import numeral from 'numeral'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideoDetails } from '../../redux/actions/videoActions';
import { MdThumbUp,MdThumbDown } from 'react-icons/md'
import ReactPlayer from 'react-player'
import Comments from '../../components/Video/Comments/Comments';
import VerticalRecs from '../../components/Recommendations/VerticalRecs';
import SubscribeBtn from '../../components/common/Buttons/SubscribeBtn';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import UnsubscribeBtn from '../../components/common/Buttons/UnsubscribeBtn';

const VideoPage = () => {
    const [ showDescription,setShowDescription ] = React.useState(false)
    const [ subscribed,setSubscribed ] = React.useState(false)

    const params = useParams()
    const dispatch = useDispatch()

    const { video: { videoDetails,loading,error } } = useSelector(state => state)
    const { user } = useSelector(state => state.user)
    
    const likes = 4000

    React.useEffect(() => {
        dispatch(fetchVideoDetails(params.id))
        checkForSubscribe()
    },[dispatch,params.id])

    const showDescriptionHandler = () => {
        setShowDescription(!showDescription)
    }

    const checkForSubscribe = () => {
        const isMatch = user?.subscriptions.find( item => item._id === videoDetails?.channel._id)
        setSubscribed(isMatch)
    }

    if (loading === true) return (<span>Loading...</span>)
    if (error) return (<span>{error}</span>)
    
  return (
      <Wrapper>
            <div className='videoPage'>
                <ReactPlayer 
                    className="videoPage__player" 
                    url={videoDetails?.sourceUrl} 
                    controls={true}/>

                <div className="videoPage__content">
                    <div className="videoPage__details">
                        
                        <h3 className="videoPage__video-title">{videoDetails?.title}</h3>

                        <div className="videoPage__top">
                            <div className="videoPage__left">
                                <span className='views'>{numeral(videoDetails?.views).format('0.a')} просмотров</span>
                                <span className="dot">•</span>
                                <span className='date'>{moment(videoDetails?.createdAt).fromNow()}</span>
                            </div>

                            <div className="videoPage__right">
                                <span className="likes">
                                    <MdThumbUp />
                                    {numeral(likes).format('0.a')}
                                </span>
                                <span className="dislikes">
                                    <MdThumbDown />
                                    {numeral(20).format('0.a')}
                                </span>
                            </div>
                        </div>

                        <div className="videoPage__channel">
                            <div className="videoPage__left">
                                <img src={videoDetails?.channel.avatar} alt="channel-avatar" className="videoPage__channel-avatar"/>
                                
                                <div className="videoPage__channel-data">
                                    <span className="videoPage__channel-name">{videoDetails?.channel.name}</span>
                                    <span className="videoPage__channel-subs">{numeral(234233).format('0.a')} подписчиков</span>
                                </div>
                            </div>

                            <div className="videoPage__right">
                                { subscribed ? <UnsubscribeBtn /> : <SubscribeBtn /> }
                            </div>
                        </div>

                        <div className="videoPage__video-description">
                            <p className={showDescription ? 'show' : ''}>
                                {videoDetails?.description}
                            </p>
                            {showDescription ? (<button onClick={showDescriptionHandler} className='btn btn__hide-more'>Свернуть</button>) : (<button onClick={showDescriptionHandler} className='btn btn__show-more'>Еще</button>)}
                        </div>

                        <Comments />
                    </div>

                    <div className="videoPage__recommendations">
                        <VerticalRecs />
                    </div>
                </div>
            </div>
      </Wrapper>
    );
};

export default VideoPage;
