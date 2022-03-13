import React from 'react';
import './_video.scss';
import numeral from 'numeral';
import moment from 'moment';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import Submenu from './Submenu/Submenu';

const Video = ({ video }) => {
    const dispatch = useDispatch()
    const { title,thumbnail,createdAt,channel: {name,avatar},views } = video
  
  return (

    <div className='video'>
        <Link to={`/video/${video._id}`} className='video__link'>
            <div className="video__image">
                <img src={thumbnail} alt="" />
                <span className="video__duration">5:33</span>
            </div>
        </Link>

        <div className="video__body">
            <Submenu />
            <div className="video__author-channel">
                <Link to={`/channel/${video.channel._id}`} className='video__author-channel__link'>
                    <img src={avatar} alt="channel-avatar" />
                </Link>
            </div>

            <div className="video__metadata">
                <div className="video__title">
                    <Link to={`/video/${video._id}`} className='video__link'>
                        {title}
                    </Link>
                </div>

                <div className="video__author-name">
                    <Link to={`/channel/${video.channel._id}`} className='video__author-channel__link'>
                        {name}
                    </Link>
                </div>

                <div className="video__stats">
                    <span className='views'>
                        {numeral(views).format('0.a')} просмотров
                    </span>
                    <span className="dot">
                        •
                    </span>
                    <span className='date'>{moment(createdAt).fromNow()}</span>
                </div>
            </div>
        </div>
</div>
  );
};

export default Video;
