import React from 'react';
import { useParams } from 'react-router-dom';
import './_videoPage.scss'
import numeral from 'numeral'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVideoDetails } from '../../redux/actions/videoActions';
import { MdThumbUp,MdThumbDown } from 'react-icons/md'
import ReactPlayer from 'react-player'

const VideoPage = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const { video } = useSelector(state => state)
    const { videoDetails,loading,error } = video
    

    React.useEffect(() => {
        dispatch(fetchVideoDetails(params.id))
    },[dispatch,params.id])

    if (loading === true) return (<span>Loading...</span>)
    if (error) return (<span>{error}</span>)

  return (
        <div className='videoPage'>
            <ReactPlayer 
                className="videoPage__player" 
                url={`http://www.youtube.com/embed/${params.id}`} 
                controls={true}/>

            <div className="videoPage__content">
                <div className="videoPage__details">
                    <h3 className="videoPage__video-title">{videoDetails?.details.snippet.title}</h3>

                    <div className="videoPage__top">
                        <div className="videoPage__left">
                            <span className='views'>{numeral(videoDetails?.details.statistics.viewCount).format('0.a')} просмотров</span>
                            <span className="dot">•</span>
                            <span className='date'>{moment('2012-06-6').fromNow()}</span>
                        </div>

                        <div className="videoPage__right">
                            <span className="likes">
                                <MdThumbUp />
                                {numeral(videoDetails?.details.statistics.likeCount).format('0.a')}
                            </span>
                            <span className="dislikes">
                                <MdThumbDown />
                                {numeral(20).format('0.a')}
                            </span>
                        </div>
                    </div>

                    <div className="videoPage__channel">
                        <div className="videoPage__left">
                            <img src={videoDetails?.channel.snippet.thumbnails.default.url} alt="channel-avatar" className="videoPage__channel-avatar"/>
                            
                            <div className="videoPage__channel-data">
                                <span className="videoPage__channel-name">{videoDetails?.channel.snippet.title}</span>
                                <span className="videoPage__channel-subs">{numeral(234233).format('0.a')} подписчиков</span>
                            </div>
                        </div>

                        <div className="videoPage__right">
                            <button className="videoPage__btn subscribe">Подписаться</button>
                        </div>
                    </div>

                    <div className="videoPage__video-description">
                        <p>
                            {videoDetails?.details.snippet.description}
                        </p>
                    </div>
                </div>

                <div className="videoPage__recommendations">
                    dfgdf
                </div>
            </div>
        </div>
    );
};

export default VideoPage;
