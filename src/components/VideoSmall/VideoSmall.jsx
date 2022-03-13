import React from 'react'
import { Link } from 'react-router-dom'
import './_VideoSmall.scss'
import moment from 'moment'

const VideoSmall = ({ video }) => {
  return (
    <li className="video-small__item">
        <Link to={`/video/${video._id}`}>
            <img src={video.thumbnail} alt="" className="video-small__item--img" />
            <h5 className="video-small__item--title">{video.title}</h5>
            <div className="video-small__item__metadata">
                <span className="video-small__item__metadata--views">
                    136 просмотров
                </span>
                <span className="video-small__item__metadata--divider">
                    •
                </span>
                <span className="video-small__item__metadata--date">
                    {moment(video.createdAt).fromNow()}
                </span>
            </div>
        </Link>
</li>
  )
}

export default VideoSmall