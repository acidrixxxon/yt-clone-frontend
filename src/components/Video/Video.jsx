import React from 'react';
import './_video.scss';
import { AiFillEye } from 'react-icons/ai'

const Video = ({ video }) => {
  return (
    <div className='video'>
        <div className="video__image">
            <img src={video.snippet.thumbnails.high.url} alt="" />
            <span className="video__duration">5:33</span>
        </div>

        <div className="video__title">
           {video.snippet.title}
        </div>

        <div className="video__details">
            <span>
                <AiFillEye /> 5M views •
            </span>
            <span>5 days ago</span>
        </div>

        <div className="video__channel">
            <img src="https://yt3.ggpht.com/RQiETnVtRph8EfLcfOXsnBCW5J8eRVc63Nb-0TduhV6YQE6Ri4OuBKsEuO0OibReoX55h1VjUiE=s68-c-k-c0x00ffffff-no-rj" alt="channel-avatar" />
            <p>{video.snippet.channelTitle}</p>
        </div>
    </div>
  );
};

export default Video;
