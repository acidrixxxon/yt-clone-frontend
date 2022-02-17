import React, { useEffect } from 'react';
import './_video.scss';
import { AiFillEye } from 'react-icons/ai'
import { viewsFormatter } from '../../utils';
import { getPopularVideos } from '../../redux/actions/videoActions';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Submenu from './Submenu/Submenu';

const Video = ({ video }) => {
    const dispatch = useDispatch()
    const {id,snippet: {title,channelTitle,channelId,publishedAt,thumbnails: {high}},contentDetails: {duration},statistics: {viewCount}} = video
    const [ channelAvatar,setChannelAvatar ] = React.useState(null)
    
    React.useEffect( () => {
        const getChannelDetails = async () => {
            try {
                const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&id=${channelId}&key=AIzaSyCi_vJ4gDMaKikfo0Q6iFRFEUOQQq0sKd4`)
                setChannelAvatar(data.items[0].snippet.thumbnails.high.url)
            } catch (error) {
                console.log(error);
            }
        }

         getChannelDetails()
    },[channelAvatar,channelId,dispatch])
  return (
    <div className='video'>
        <Link to={`/video/${id}`} className='video__link'>
            <div className="video__image">
                <img src={high.url} alt="" />
                <span className="video__duration">5:33</span>
            </div>

            <div className="video__data">
                <Submenu />
                <div className="video__title">
                    {title}
                </div>

                <div className="video__details">
                    <span>
                        <AiFillEye /> {viewsFormatter(viewCount)} views •
                    </span>
                    <span>5 days ago</span>
                </div>

                <div className="video__channel">
                    <img src={channelAvatar} alt="channel-avatar" />
                    <p>{channelTitle}</p>
                </div>  
            </div>
        </Link>
    </div>
  );
};

export default Video;
