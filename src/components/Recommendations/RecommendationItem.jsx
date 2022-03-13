import React from 'react'
import './_VerticalRecs.scss'
import numeral from 'numeral'
import moment from 'moment'
import { Link } from 'react-router-dom'

const RecommendationItem = ({ item }) => {

  return (
      <Link to={`/video/${item._id}`}>
        <li className='recommendations__list-item'>
            <img src={item.thumbnail} alt="img" className="recommendation__image" />
            <div className="recommendation__data">
                <h3 className="recommendation__title">
                    {item.title}
                </h3>
                <span className="recommendation__channel-title">
                    {item.channel.name}
                </span>
                <div className="recommendation__metadata">
                    <span className='views'>{numeral(item.views).format('0.a')} просмотров</span>
                    <span className="divider">•</span>
                    <span className="date">{moment(item.createdAt).fromNow()}</span>
                </div>
            </div>
        </li>
      </Link>
  )
}

export default RecommendationItem