import React from 'react'
import './_videoItem.scss'

const VideoItem = () => {
  return (
    <div className="video__item">
        <div className="video__item--image">
            <img src="https://i.ytimg.com/vi/fOyrwHVvj_4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDHVMdWzu-4IoaK31StU8tIfdeGQ" alt="" />
        </div>

        <h3 className="video__item--title">
            Новый RANGE ROVER SPORT SVR британский агрессор
        </h3>

        <div className="video__item--channel__name">Channel name</div>
        <div className="video__item--metadata">
            <span className="views">
                56 тыс. просмотров
            </span>
            <span className="divider">
            •
            </span>
            <span className="date">
                10 часов назад
            </span>
        </div>
    </div>
  )
}

export default VideoItem